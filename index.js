const octokit = new Octokit({ auth: `personal-access-token123` });
    octokit.rest.issues.create({
    owner: "hexu",
    repo: "hello-world",
    title: "Hello, world!",
    body: "I created this issue using Octokit!",
});