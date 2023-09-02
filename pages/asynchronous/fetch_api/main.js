(async function () {
  {
    const owner = "dianprsty";
    const repo = "rwid-git";

    try {
      // id, full_name, description
      const json = fetch(
        `https://api.github.com/reposs/${owner}/${repo}`,
      ).json();

      console.log(`id = ${json.id}`);
      console.log(`full_name = ${json.full_name}`);
      console.log(`description = ${json.description}`);
    } catch (error) {
      console.error(error);
    }
  }
})();
