# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- 미국·한국 Tech 기업의 AI Platform, LLM Serving, AI Agent 채용 담당자와 기술 면접관
- 지원자의 실제 문제 정의, 모델 선택, 서빙 설계, 운영 판단과 구현 범위를 짧은 시간 안에 검토하려는 독자

## Product Purpose

박재우의 AI 시스템·모델 서빙 경험을 역할별 근거와 함께 공개하는 포트폴리오다. 성공 기준은 기술명 나열이 아니라, 어떤 업무 문제와 자원 제약을 어떻게 구조화하고 실제 운영 가능한 시스템으로 구현했는지 독자가 확인할 수 있는 것이다.

## Positioning

기관과 내부 사용자의 요구를 직접 분석하고, 모델 선정·솔루션 아키텍처·제품 개발·GPU 서빙·배포·운영 인계까지 연결한 실제 구현 경험을 보여준다. `/ko/serving`은 이 가운데 Toss AI Platform 직무와 직접 연결되는 모델 서빙·최적화·플랫폼 일반화 경험만 별도의 운영 기록으로 재구성한다.

## Operating Context

- 사내 Cowork LLM: A100 40GB × 8 환경에서 실제 업무 요청을 기준으로 모델을 비교하고 GLM-5.3-Flash AWQ W4A16 체크포인트를 배포
- AI PoC ServingServer: RTX PRO 6000 96GB 환경에서 LLM, 문서 OCR, Vision Grounding, STT, Video Understanding, Embedding을 vLLM과 격리형 Sidecar로 운영
- 사내 AI Gateway: LiteLLM을 이용한 사용자 Key, Team·Group, RPM, Budget, 사용량과 비용 환산 정책
- AIOps-PoC Control Plane: 요구사항, Agent planning, deterministic compiler, human approval, ServingPipelineSpec, Runtime과 Playground 연결

## Capabilities and Constraints

- 공개 가능한 모델명, GPU 환경, 운영 정책, 구현 구조와 화면만 사용한다.
- 확인되지 않은 대규모 트래픽, SLA, 고가용성, Kubernetes, Dynamo, Triton Inference Server, 장애 RCA, 성능 개선율은 주장하지 않는다.
- `TRITON_ATTN`은 vLLM attention backend이며 NVIDIA Triton Inference Server 경험으로 표현하지 않는다.
- FlashAttention 4는 호환성 실험 범위이며 프로덕션 적용으로 표현하지 않는다.
- TTS는 현재 ServingServer 구현에서 확인되지 않아 Serving 포트폴리오에서 제외한다.
- 공개 가능한 TTFT, TPOT, p95, 처리량과 동시 사용자 수가 없어 정량 개선 수치를 만들지 않는다.

## Brand Commitments

- 이름: Park Jaewoo (Jaewoo Park)
- 목표 직무: AI Agent Engineer, AI Solutions Architect, AI Platform / LLM Serving Engineer
- 목소리: 과장 없는 기술 문서, 결정과 근거 중심, 자연스러운 한국어
- GitHub: https://github.com/jwoo9928
- LinkedIn: https://www.linkedin.com/in/jaewoo9928/
- Email: jwoo9928@gmail.com

## Evidence on Hand

- `C:/work/projects/AIOps/ServingServer`: tier loader, vLLM runtime contract, sidecar scheduling, readiness, service manifest와 테스트
- `C:/work/projects/AIOps`: Agent Harness, Graph Intent Compiler, ServingPipelineSpec와 사용자 승인 흐름
- `public/projects/aiops-plan-approval.png`: 실제 PLAN_APPROVAL 화면
- 사용자 확인: GLM-5.3-Flash 모델 비교·AWQ W4A16 최종 배포와 LiteLLM 운영 정책
- 미확보: 공개 가능한 Serving benchmark 결과와 LiteLLM 관리 화면

## Product Principles

1. 업무 목적과 제약에서 시작하고 기술은 결정의 근거로 배치한다.
2. 실제 구현과 사용자 확인 범위를 구분하고 없는 수치를 만들지 않는다.
3. 모델 선택, Runtime, Gateway와 Control Plane의 책임을 섞지 않는다.
4. 한 화면에서 직무 적합성을 파악하고 깊게 읽을수록 구현 근거가 드러나게 한다.
5. 장식보다 실제 시스템 구조, 운영 계약과 검증 범위를 우선한다.

## Accessibility & Inclusion

- 한국어 제목과 본문은 글자 겹침 없이 읽혀야 하며, 모바일 320px까지 가로 스크롤이 없어야 한다.
- 본문 대비는 WCAG AA 이상, 키보드 포커스는 항상 보여야 한다.
- 색상만으로 상태를 구분하지 않고 상태명을 함께 표기한다.
