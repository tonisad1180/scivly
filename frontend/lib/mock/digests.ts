import type { DigestOut, DigestScheduleOut } from "@/lib/api/types";
import { mockPapers } from "@/lib/mock/papers";
import { DEMO_WORKSPACE_ID } from "@/lib/mock/profiles";

const paperById = Object.fromEntries(mockPapers.map((paper) => [paper.id, paper]));

export const mockDigestSchedule: DigestScheduleOut = {
  id: "digest-schedule-weekday",
  workspace_id: DEMO_WORKSPACE_ID,
  cron_expression: "0 9 * * 1-5",
  timezone: "Asia/Shanghai",
  channel_ids: ["channel-email-brief", "channel-webhook-sync"],
  channel_labels: ["Morning brief", "Research queue webhook"],
  is_active: true,
  cadence_label: "Weekdays at 09:00",
  created_at: "2026-03-01T02:00:00Z",
  next_run_at: "2026-03-11T01:00:00Z",
};

export const mockDigests: DigestOut[] = [
  {
    id: "digest-2026-03-10-morning",
    workspace_id: DEMO_WORKSPACE_ID,
    schedule_id: mockDigestSchedule.id,
    period_start: "2026-03-09T00:00:00Z",
    period_end: "2026-03-10T00:00:00Z",
    paper_ids: [
      "paper-lab-notebook-agents",
      "paper-toolsandbox-r",
      "paper-vision-language-repair-loops",
      "paper-sparse-memory-adapters",
    ],
    paper_count: 4,
    content: {
      title: "Morning research signal",
      overview:
        "The strongest papers today cluster around evidence-first research agents, replayable evaluation, and long-context support for review workflows.",
      sections: [
        {
          id: "section-agents",
          title: "Agent evaluation and scientific QA",
          summary:
            "Two papers raise the bar for evidence quality: one improves the planning loop for scientific QA, and the other makes research-agent evaluation replayable.",
          papers: [
            paperById["paper-lab-notebook-agents"],
            paperById["paper-toolsandbox-r"],
          ],
        },
        {
          id: "section-multimodal",
          title: "Multimodal repair and grounding",
          summary:
            "Embodied and figure-grounded systems continue to move toward explicit verification and targeted repairs instead of full replanning.",
          papers: [paperById["paper-vision-language-repair-loops"]],
        },
        {
          id: "section-efficiency",
          title: "Long-context infrastructure",
          summary:
            "Sparse memory remains the most immediately actionable improvement for long-form paper review workflows this cycle.",
          papers: [paperById["paper-sparse-memory-adapters"]],
        },
      ],
    },
    status: "sent",
    created_at: "2026-03-10T00:10:00Z",
    sent_at: "2026-03-10T01:00:00Z",
  },
  {
    id: "digest-2026-03-08-weekend",
    workspace_id: DEMO_WORKSPACE_ID,
    schedule_id: mockDigestSchedule.id,
    period_start: "2026-03-06T00:00:00Z",
    period_end: "2026-03-08T00:00:00Z",
    paper_ids: [
      "paper-dataset-cards-cite-back",
      "paper-chain-of-verification-figures",
      "paper-affiliation-signals",
      "paper-distillation-document-vlms",
    ],
    paper_count: 4,
    content: {
      title: "Weekend benchmark and systems sweep",
      overview:
        "The weekend queue is broader: more infrastructure work, more evaluation mechanics, and one directly useful cost-reduction paper for future paper enrichment.",
      sections: [
        {
          id: "section-evidence-audit",
          title: "Evidence linking and benchmark audit",
          summary:
            "Evidence-linking and prestige-prior analysis both feed directly into explainable triage and digest QA design decisions.",
          papers: [
            paperById["paper-dataset-cards-cite-back"],
            paperById["paper-affiliation-signals"],
          ],
        },
        {
          id: "section-visual",
          title: "Visual grounding",
          summary:
            "Figure verification is getting more structured, which matters for the eventual paper detail and visual QA surface.",
          papers: [paperById["paper-chain-of-verification-figures"]],
        },
        {
          id: "section-cost",
          title: "Pipeline cost leverage",
          summary:
            "Document VLM distillation is the clear systems paper in the batch, with cost-per-page metrics relevant to enrichment planning.",
          papers: [paperById["paper-distillation-document-vlms"]],
        },
      ],
    },
    status: "sent",
    created_at: "2026-03-08T00:10:00Z",
    sent_at: "2026-03-08T01:00:00Z",
  },
];
