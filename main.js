import { loadIntoSection as loadCommunityProjectIntoSection } from "./js/community-project.js";
import { loadStislaJs } from "./js/stisla.js";
import { loadIntoSidebar as loadStudyCaseIntoSidebar } from "./js/study-case.js";

await loadStudyCaseIntoSidebar();
await loadCommunityProjectIntoSection();
await loadStislaJs();
