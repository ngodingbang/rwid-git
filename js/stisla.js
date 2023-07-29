import { loadJavaScript } from "./helper.js";

export async function loadStislaJs() {
  await loadJavaScript({
    src: "https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js",
  });
  await loadJavaScript({
    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
    integrity:
      "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",
    crossorigin: "anonymous",
  });
  await loadJavaScript({
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
    integrity:
      "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",
    crossorigin: "anonymous",
  });
  await loadJavaScript({
    src: "https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js",
  });
  await loadJavaScript({
    src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
  });
  await loadJavaScript({ src: "/assets/js/stisla.js" });
  await loadJavaScript({ src: "/assets/js/scripts.js" });
  await loadJavaScript({ src: "/assets/js/custom.js" });
}
