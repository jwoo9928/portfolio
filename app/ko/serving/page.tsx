import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Noto_Sans_KR } from "next/font/google";
import styles from "./serving-page.module.css";

const servingSans = Noto_Sans_KR({
  variable: "--font-serving-sans",
  display: "swap",
  preload: false,
  weight: ["400", "700"],
});

const pageTitle = "AI Serving Platform";
const pageDescription =
  "업무 적합성을 기준으로 모델을 선택하고, GPU 제약 안에서 LLM과 이기종 AI 모델을 조직 공용 Serving Platform으로 구축·운영한 경험.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/ko/serving" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/ko/serving",
    title: `${pageTitle} — Jaewoo Park`,
    description: pageDescription,
  },
  twitter: {
    card: "summary",
    title: `${pageTitle} — Jaewoo Park`,
    description: pageDescription,
  },
};

const railLinks = [
  ["#model-decision", "모델 선정과 메모리 제약"],
  ["#platform", "플랫폼 구성"],
  ["#runtime", "이기종 모델 런타임"],
  ["#reliability", "실행 안정성"],
  ["#gateway", "접근·사용량 거버넌스"],
  ["#control-plane", "Agent Harness 연동"],
  ["#evidence", "운영 근거와 검증 범위"],
] as const;

const platformSignals = [
  {
    key: "업무 적합성",
    title: "실제 Cowork 요청 비교 → GLM-5.3-Flash 선정",
  },
  {
    key: "배포 가능성",
    title: "328 GB FP8 → AWQ W4A16 · A100 배포",
  },
  {
    key: "런타임",
    title: "vLLM 공통 계층 + 기능별 격리 Sidecar",
  },
  {
    key: "거버넌스",
    title: "LiteLLM Key · Team · RPM · Budget",
  },
  {
    key: "실행 통제",
    title: "Compiler 검증 · Human Approval · Runtime",
  },
] as const;

const runtimeRows = [
  {
    task: "Tiered LLM",
    model: "Qwen·Gemma 4개 Tier",
    runtime: "vLLM subprocess",
    operation: "요청 시 Lazy Loading · 기본 Active Tier 1 · 조용한 Fallback 금지",
  },
  {
    task: "문서 OCR",
    model: "zai-org/GLM-OCR",
    runtime: "vLLM multimodal chat",
    operation: "FlashAttention 2 · BF16 KV · Chunked Prefill",
  },
  {
    task: "Vision Grounding",
    model: "nvidia/LocateAnything-3B",
    runtime: "격리형 Sidecar",
    operation: "Bounded Queue · 호환 요청 Microbatch · Idempotency",
  },
  {
    task: "STT",
    model: "Nemotron ASR 0.6B",
    runtime: "격리형 Sidecar",
    operation: "Dynamic Microbatch · Cache · Singleflight",
  },
  {
    task: "Video Understanding",
    model: "MCG-NJU/VideoChat3-4B",
    runtime: "격리형 Sidecar",
    operation: "단일 GPU용 Bounded Queue · 요청 제한 계약",
  },
  {
    task: "Embedding",
    model: "Jina Embeddings v5 4종",
    runtime: "vLLM pooler",
    operation: "Retrieval · Clustering · Text Matching · Classification 분리",
  },
] as const;

const evidenceRows = [
  {
    id: "E-01",
    status: "구현 확인",
    title: "Tier Loader와 120초 Drain",
    detail: "ServingServer 구현과 테스트에서 Lazy Loading, Load deduplication, in-flight request pin, eviction 계약을 확인했습니다.",
    artifact: "ServingServer/src/loaders/llm_loader.py",
  },
  {
    id: "E-02",
    status: "구현 확인",
    title: "Queue·Microbatch·Singleflight·GPU Lease",
    detail: "LocateAnything, Nemotron STT, VideoChat3 Sidecar의 스케줄링과 공유 GPU 경합 제어를 확인했습니다.",
    artifact: "ServingServer/tests/test_sidecar_gpu_scheduling_contract.py",
  },
  {
    id: "E-03",
    status: "구현 확인",
    title: "Readiness와 Service Manifest",
    detail: "프로세스 생존, 요청 준비 상태, 모델 기능·입력 한계와 Manifest 무결성 계약을 분리했습니다.",
    artifact: "ServingServer/src/api/service_manifest.py · tests/test_service_manifest_contract.py",
  },
  {
    id: "E-04",
    status: "운영 확인",
    title: "GLM 배포와 LiteLLM 운영 정책",
    detail: "모델 비교·AWQ W4A16 최종 배포와 Key·Team·RPM·Budget 정책은 실제 운영 범위로 공개합니다.",
    artifact: "운영자 확인 · 사용자별 정책값",
  },
] as const;

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className={styles.sectionHeading}>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  );
}

export default function ServingPortfolioPage() {
  return (
    <main
      className={`${styles.page} ${servingSans.variable}`}
      id="top"
      lang="ko"
    >
      <header className={styles.topbar}>
        <Link className={styles.wordmark} href="/ko">
          JAEWOO PARK
        </Link>
        <p>AI PLATFORM · LLM SERVING ENGINEER</p>
        <Link className={styles.backLink} href="/ko">
          전체 포트폴리오
        </Link>
      </header>

      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1>
            업무 적합성과 GPU 제약을 함께 해결한 <span>AI 서빙 플랫폼</span>
          </h1>
          <p className={styles.heroLead}>
            실제 Cowork 요청으로 모델을 비교해 GLM-5.3-Flash를 선정하고,
            A100 환경에는 AWQ W4A16으로 최종 배포했습니다. RTX 환경에서는
            이기종 AI 모델을 공통 Serving 계약으로 운영했습니다.
          </p>
          <div className={styles.heroLinks} aria-label="외부 프로필">
            <a href="https://www.linkedin.com/in/jaewoo9928/">LinkedIn</a>
            <a href="https://github.com/jwoo9928">GitHub</a>
            <a href="mailto:jwoo9928@gmail.com">Email</a>
          </div>
        </div>

        <ol className={styles.decisionLedger} aria-label="AI Serving Platform의 직무 적합성">
          {platformSignals.map((step) => (
            <li key={step.key}>
              <span>{step.key}</span>
              <div>
                <strong>{step.title}</strong>
              </div>
            </li>
          ))}
        </ol>

        <p className={styles.scopeLine}>
          A100 40GB × 8의 Cowork LLM · RTX PRO 6000 96GB의 이기종 AI Runtime ·
          vLLM 실행 계층 · LiteLLM 사용 거버넌스
        </p>
      </header>

      <nav className={styles.mobileIndex} aria-label="Serving 포트폴리오 빠른 목차">
        <p>페이지 목차</p>
        <div>
          {railLinks.map(([href, label]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      <div className={styles.documentLayout}>
        <aside className={styles.sideRail}>
          <p>ON THIS PAGE</p>
          <nav aria-label="Serving 포트폴리오 목차">
            {railLinks.map(([href, label]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <p className={styles.railNote}>
            저장소 구현, 공식 모델 카드, 운영자 확인 범위를 구분해
            작성했습니다.
          </p>
        </aside>

        <div className={styles.documentBody}>
          <section className={styles.section} id="model-decision">
            <SectionHeading
              title="모델 선정과 메모리 제약"
              description="가장 큰 모델이나 가장 작은 모델을 고르는 문제가 아니었습니다. 실제 Cowork 요청을 잘 해석하는 모델을 먼저 선정하고, 그 모델을 현재 자원에서 운영할 방법을 찾았습니다."
            />

            <div className={styles.decisionDetail}>
              <div>
                <h3>선택 기준</h3>
                <p>
                  다양한 구성원의 요청 의도와 업무 문제를 정확하게 파악하면서,
                  여러 사용자가 공유하는 환경에서 실행할 수 있어야 했습니다.
                  poolside/Laguna-S-2.1, Solar Open 2, Qwen 27B급 모델과
                  GLM-5.3-Flash를 실제 요청 시나리오로 비교한 결과,
                  GLM-5.3-Flash를 최종 모델로 선정했습니다.
                </p>
              </div>
              <div>
                <h3>배포 결정</h3>
                <p>
                  328 GB(약 306 GiB) 규모의 공식 FP8 체크포인트를 그대로 적재하면
                  명목 320GB의 A100 환경에서 Runtime, CUDA Graph, KV Cache를 위한
                  여유를 확보하기 어려웠습니다. 모델 규모를 낮추는 대신 커뮤니티
                  AWQ W4A16 체크포인트의 양자화 범위를 확인했습니다. Routed
                  MoE Expert 가중치는 INT4로 압축하고 Activation과 Attention,
                  Router, Shared Expert 등 주요 경로는 BF16으로 유지하는
                  구성을 A100 환경에 적용했습니다.
                </p>
              </div>
            </div>

            <dl className={styles.quantizationLedger}>
              <div>
                <dt>모델 구조</dt>
                <dd>약 320B 전체 파라미터 · 18B 활성 파라미터의 Multimodal MoE</dd>
              </div>
              <div>
                <dt>양자화 형식</dt>
                <dd>AWQ W4A16 · compressed-tensors · group size 128 · symmetric</dd>
              </div>
              <div>
                <dt>정밀도 경계</dt>
                <dd>Routed Expert는 W4, Activation과 비양자화 핵심 모듈은 BF16</dd>
              </div>
              <div>
                <dt>운영 상태</dt>
                <dd>사내 Cowork용 A100 호환 vLLM 환경 배포 완료</dd>
              </div>
            </dl>

            <p className={styles.sourceNote}>
              외부 근거 ·{" "}
              <a href="https://huggingface.co/zai-org/GLM-5.3-Flash">
                공식 GLM-5.3-Flash 모델 카드
              </a>
              {" · "}
              <a href="https://huggingface.co/wtdcode/GLM-5.3-Flash-AWQ-W4A16">
                커뮤니티 AWQ W4A16 체크포인트
              </a>
            </p>
          </section>

          <section className={styles.section} id="platform">
            <SectionHeading
              title="플랫폼 구성"
              description="Cowork LLM과 AI PoC ServingServer는 같은 경로가 아닙니다. 각각의 사용자와 운영 목적을 분리하고, Gateway·Control Plane·Serving Plane·GPU 자원의 책임을 명확히 나눴습니다."
            />

            <figure className={styles.systemFigure}>
              <div className={styles.routeLane}>
                <h3>사내 Cowork 경로</h3>
                <ol>
                  <li>
                    <span>사용자</span>
                    <strong>일반 구성원 · 인턴</strong>
                  </li>
                  <li>
                    <span>Gateway</span>
                    <strong>LiteLLM</strong>
                    <small>Key · Team · RPM · Budget · Usage</small>
                  </li>
                  <li>
                    <span>Model Runtime</span>
                    <strong>GLM-5.3-Flash AWQ W4A16</strong>
                  </li>
                  <li>
                    <span>Resource</span>
                    <strong>A100 40GB × 8</strong>
                  </li>
                </ol>
              </div>

              <div className={styles.routeLane}>
                <h3>AI PoC 경로</h3>
                <ol>
                  <li>
                    <span>Input</span>
                    <strong>수요기관 요구사항</strong>
                  </li>
                  <li>
                    <span>Control Plane</span>
                    <strong>Agent Harness · Compiler · Approval</strong>
                  </li>
                  <li>
                    <span>Serving Plane</span>
                    <strong>vLLM · FastAPI · Isolated Sidecars</strong>
                    <small>LLM · OCR · Vision · STT · Video · Embedding</small>
                  </li>
                  <li>
                    <span>Resource</span>
                    <strong>RTX PRO 6000 96GB</strong>
                  </li>
                </ol>
              </div>
              <figcaption>
                LiteLLM 정책의 적용 범위는 Cowork LLM 경로입니다. RTX
                ServingServer의 비정형 모델은 기능별 API와 Service Manifest로
                연결했습니다.
              </figcaption>
            </figure>
          </section>

          <section className={styles.section} id="runtime">
            <SectionHeading
              title="이기종 모델 런타임"
              description="모든 모델을 한 프레임워크에 억지로 맞추지 않았습니다. vLLM에 적합한 모델은 공통 실행 계층으로 구성하고, 독립된 의존성과 스케줄링이 필요한 모델은 Sidecar로 격리했습니다."
            />

            <div className={styles.tableWrap}>
              <table className={styles.runtimeTable}>
                <caption>RTX PRO 6000 96GB 환경의 모델별 실행 계약</caption>
                <thead>
                  <tr>
                    <th scope="col">업무</th>
                    <th scope="col">모델</th>
                    <th scope="col">Runtime</th>
                    <th scope="col">운영 정책</th>
                  </tr>
                </thead>
                <tbody>
                  {runtimeRows.map((row) => (
                    <tr key={row.task}>
                      <th data-label="업무" scope="row">
                        {row.task}
                      </th>
                      <td data-label="모델">{row.model}</td>
                      <td data-label="Runtime">{row.runtime}</td>
                      <td data-label="운영 정책">{row.operation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={styles.runtimeDecisions}>
              <article>
                <h3>생성 모델 실행 계약</h3>
                <p>
                  Tiered Qwen·Gemma는 vLLM 0.26에서 TRITON_ATTN, FP8 E4M3 KV
                  Cache, Prefix Caching, Chunked Prefill과 O2 Compile/CUDA Graph
                  조합으로 구성했습니다.
                </p>
              </article>
              <article>
                <h3>호환성을 우선한 Backend 선택</h3>
                <p>
                  FlashAttention 4는 RTX PRO 6000의 SM120, vLLM 0.26, FP8 KV
                  Cache 조합에서 운영 호환성이 확보되지 않아 프로덕션에서
                  제외했습니다. 생성 모델은 TRITON_ATTN, OCR과 Jina Embedding은
                  FlashAttention 2 경로를 사용합니다.
                </p>
              </article>
            </div>
            <p className={styles.boundaryNote}>
              TRITON_ATTN은 vLLM의 Attention Backend이며, 별도의 모델 서버
              제품을 의미하지 않습니다.
            </p>
          </section>

          <section className={styles.section} id="reliability">
            <SectionHeading
              title="실행 안정성"
              description="공유 GPU에서 모델 전환과 동시 요청이 충돌하지 않도록 모델 수명주기, 요청 수용량, 준비 상태와 배포 의존성을 코드 계약으로 제한했습니다."
            />

            <div className={styles.reliabilityLayout}>
              <div>
                <h3>요청·모델 수명주기</h3>
                <ol className={styles.executionPath}>
                  <li>
                    <strong>요청 수용</strong>
                    <span>입력 제한과 Bounded Queue</span>
                  </li>
                  <li>
                    <strong>중복 제거</strong>
                    <span>Tier Load deduplication · 동일 요청 Singleflight</span>
                  </li>
                  <li>
                    <strong>GPU 경합 제어</strong>
                    <span>공유 GPU Lease · 호환 요청 Microbatch</span>
                  </li>
                  <li>
                    <strong>안전한 Tier 전환</strong>
                    <span>in-flight request pin · 최대 120초 Drain · Eviction</span>
                  </li>
                  <li>
                    <strong>명시적 결과</strong>
                    <span>조용한 모델 Fallback 없이 성공·실패 반환</span>
                  </li>
                </ol>
              </div>

              <div className={styles.contractLedger}>
                <h3>상태·배포 계약</h3>
                <dl>
                  <div>
                    <dt>/live</dt>
                    <dd>프로세스 생존 여부</dd>
                  </div>
                  <div>
                    <dt>/health</dt>
                    <dd>모델 적재와 시작 상태 요약</dd>
                  </div>
                  <div>
                    <dt>/ready</dt>
                    <dd>실제 요청 처리 가능 여부와 Sidecar Smoke Request</dd>
                  </div>
                  <div>
                    <dt>/service-manifest</dt>
                    <dd>모델 ID·기능·입력 한계와 Canonical SHA-256</dd>
                  </div>
                  <div>
                    <dt>Base image gate</dt>
                    <dd>CUDA·PyTorch·vLLM 민감 의존성의 예기치 않은 교체 차단</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <section className={styles.section} id="gateway">
            <SectionHeading
              title="접근·사용량 거버넌스"
              description="사내 Cowork 모델을 Endpoint로 직접 공개하지 않고 LiteLLM을 내부 AI Gateway로 구성했습니다. 사용자 유형별 접근과 사용량 정책을 분리하고, 내부 사용량을 외부 API 비용으로 환산할 수 있게 했습니다."
            />

            <table className={styles.policyTable}>
              <caption>LiteLLM 사용자별 호출·비용 정책</caption>
              <thead>
                <tr>
                  <th scope="col">사용자 범위</th>
                  <th scope="col">호출 정책</th>
                  <th scope="col">비용·Token 정책</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th data-label="사용자 범위" scope="row">일반 구성원</th>
                  <td data-label="호출 정책">120 RPM</td>
                  <td data-label="비용·Token 정책">금액·Token 제한 없음</td>
                </tr>
                <tr>
                  <th data-label="사용자 범위" scope="row">인턴·제한 사용자</th>
                  <td data-label="호출 정책">5 RPM</td>
                  <td data-label="비용·Token 정책">월 $100 Budget</td>
                </tr>
              </tbody>
            </table>

            <div className={styles.gatewayDetail}>
              <p>
                사용자별 API Key를 발급하고 Team·Group 단위로 관리했습니다.
                모델별 Token 가격을 설정해 Usage를 비용으로 환산하되, 실제 내부
                청구가 아니라 외부 API를 병행하거나 전환할 때 필요한 운영비를
                추정하는 기준으로 사용했습니다.
              </p>
              <p>
                현재 공개 범위는 사용자별 Key, Team·Group, RPM, Budget,
                Usage·Cost 운영 정책입니다. 비정형 모델 전체의 통합 Gateway와
                전 구간 Observability는 이 경력 범위에 포함하지 않았습니다.
              </p>
            </div>
          </section>

          <section className={styles.section} id="control-plane">
            <SectionHeading
              title="Agent Harness 연동"
              description="ServingServer를 모델 Endpoint 모음으로 끝내지 않았습니다. 수요기관의 요구사항을 검증 가능한 실행 명세로 전환하는 AIOps-PoC Control Plane과 연결했습니다."
            />

            <div className={styles.controlPlaneLayout}>
              <figure className={styles.approvalFigure}>
                <div className={styles.approvalCrop}>
                  <Image
                    alt="AIOps-PoC에서 담당자가 실행 계획을 확인하고 승인하는 실제 PLAN_APPROVAL 화면"
                    fill
                    sizes="(max-width: 760px) 100vw, 58vw"
                    src="/projects/aiops-plan-approval.png"
                  />
                </div>
                <figcaption>
                  실제 PLAN_APPROVAL 화면. 담당자 승인 이후에만 Runtime 구성
                  단계로 이동합니다.
                </figcaption>
              </figure>

              <div className={styles.controlCopy}>
                <ol>
                  <li>
                    <span>RuntimeGraphIntent</span>
                    <p>에이전트가 필요한 모델, 처리 노드와 데이터 흐름을 제안합니다.</p>
                  </li>
                  <li>
                    <span>Graph Intent Compiler</span>
                    <p>입출력 타입, DAG 구조, 진입점, 모델 준비 상태와 실행 가능성을 코드 규칙으로 검증합니다.</p>
                  </li>
                  <li>
                    <span>Human Approval</span>
                    <p>담당자가 모델 구성, 데이터 흐름, 예상 산출물과 제약을 확인합니다.</p>
                  </li>
                  <li>
                    <span>ServingPipelineSpec</span>
                    <p>검증과 승인을 통과한 실행 명세만 Runtime과 Playground로 전달합니다.</p>
                  </li>
                </ol>
                <blockquote>
                  Agent proposes. Compiler validates. Runtime executes.
                </blockquote>
                <Link href="/ko/work/aiops">AIOps-PoC 전체 사례 보기</Link>
              </div>
            </div>
          </section>

          <section className={styles.section} id="evidence">
            <SectionHeading
              title="운영 근거와 검증 범위"
              description="저장소에서 확인한 구현, 실제 운영으로 확인한 사실, 외부에 공개할 수 없는 측정값을 구분했습니다."
            />

            <div className={styles.evidenceIndex}>
              {evidenceRows.map((item) => (
                <article key={item.id}>
                  <p>
                    <span>{item.id}</span>
                    {item.status}
                  </p>
                  <h3>{item.title}</h3>
                  <div>
                    <p>{item.detail}</p>
                    <code>{item.artifact}</code>
                  </div>
                </article>
              ))}
            </div>

            <p className={styles.measurementBoundary}>
              공개 범위 · TTFT, TPOT, p95, Throughput의 외부 공개 수치가 없어
              성능 개선율은 기재하지 않았습니다.
            </p>

            <div className={styles.roleFit}>
              <h3>요구사항 기반 솔루션 구현</h3>
              <p>
                요구사항을 기술 문제로 구조화하고, 업무 적합성에 따라 모델을
                선택하며, GPU·Runtime·Gateway·Control Plane을 실제 조직이
                사용할 수 있는 하나의 운영 구조로 연결했습니다. 이전 모바일·웹
                제품 개발 경험은 API, 상태, 오류, 배포와 사용자 경험까지 끝까지
                구현하는 기반이 되었습니다.
              </p>
              <div>
                <Link href="/ko/career">한국 지원용 경력기술서</Link>
                <a href="/Jaewoo_Park_AI_Resume_2026.html">English resume</a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>모델 선택, 실행 계약, 사용 정책까지 연결된 AI 서빙 플랫폼.</p>
        <div>
          <span>© 2026 Jaewoo Park</span>
          <a href="mailto:jwoo9928@gmail.com">jwoo9928@gmail.com</a>
          <a href="#top">맨 위로</a>
        </div>
      </footer>
    </main>
  );
}
