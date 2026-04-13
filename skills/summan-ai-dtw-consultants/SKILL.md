---
name: summan-ai-dtw-consultants
description: The central orchestrator skill for the "Journey to the Digital Twin" consulting pipeline. Coordinates the flow between specialized sub-agents.
---

| Field | Value |
| :--- | :--- |
| **Name** | Summan DTW Orchestrator |
| **Role** | Process Orchestrator & Controller |
| **Stage** | Stage 1: Assessment (Entry Point) |
| **Risk** | Low (Coordination & Task Routing) |
| **Tags** | orchestration, dtw, assessment, industrial |


# summan-ai-dtw-consultants (Orchestrator)

## When to use this skill
- Use this skill as the primary entry point for any "Journey to the Digital Twin" (Etapa 1: Assessment) engagement.
- Use it to manage the transition between discovery, mapping, triangulation, viability, instrumentation, readiness, and reporting phases.

## Workflow Orchestration
This skill governs the following pipeline:
1.  **Ingestion**: Trigger `summan-ingesting-client-context` to analyze raw client data.
2.  **Mapping**: Trigger `summan-mapping-operational-process` to build the functional operational map.
3.  **Triangulation**: Trigger `summan-triangulating-operational-hotspots` to identify frictional points.
4.  **Viability**: Trigger `summan-scoring-analytical-viability` to evaluate sAhI feasibility.
5.  **Instrumentation**: Trigger `summan-analyzing-ot-instrumentation` to assess observability (ISA-95).
6.  **Readiness**: Trigger `summan-assessing-digital-readiness` to evaluate the 6 dimensions of maturity.
7.  **Reporting**: Trigger `summan-generating-assessment-report` to synthesize the final executive report.

## Instructions
- You sit at the top of the hierarchy. Your goal is to ensure that the context (`enriched_evidence_baseline.md`, `process_map.md`, etc.) flows correctly between specialized agents.
- Before triggering a sub-agent, verify that the required artifacts from the previous step are present in `<appDataDir>/brain/<conversation-id>/`.
- If critical information is missing, do not proceed; instead, prompt the user for the necessary data or ask the current agent to refine its output.
- All executive communication and planning must be in **Spanish**.

## Sub-Agents Configuration
- **Discovery**: `summan-ingesting-client-context`
- **Mapper**: `summan-mapping-operational-process`
- **Hotspots**: `summan-triangulating-operational-hotspots`
- **Viability**: `summan-scoring-analytical-viability`
- **OT/IT**: `summan-analyzing-ot-instrumentation`
- **Readiness**: `summan-assessing-digital-readiness`
- **Reporting**: `summan-generating-assessment-report`
