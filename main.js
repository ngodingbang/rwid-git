import { loadCommunityProject } from "./js/community-project.js";
import { loadStislaJs } from "./js/stisla.js";
import { loadStudyCase } from "./js/study-case.js";

await loadStudyCase();
await loadCommunityProject();
await loadStislaJs();
