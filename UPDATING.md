# Updating the upstream version

"Upstream" is the app repo, [christhealien/blake2b-asic-control](https://github.com/christhealien/blake2b-asic-control). Its GitHub Actions build and publish the image `ghcr.io/christhealien/blake2b-asic-control:<version>` (x86_64 and aarch64) when a `v<version>` tag is pushed there.

## Determining the upstream version

- The latest release tag of the app repo:

  ```sh
  git ls-remote --tags https://github.com/christhealien/blake2b-asic-control | sed 's|.*refs/tags/||' | sort -V | tail -1
  ```

- Check the image for that version is published (the tag's Actions run is green) before pinning it:

  ```sh
  docker manifest inspect ghcr.io/christhealien/blake2b-asic-control:<version> | jq -r '.manifests[].platform.architecture'
  ```

  It must list `amd64` and `arm64`.

The pin lives in `startos/manifest/index.ts` at `images.app.source.dockerTag`.

## Applying the bump

1. Set `dockerTag` to `ghcr.io/christhealien/blake2b-asic-control:<version>` (no leading `v`).
2. In `startos/versions/current.ts`, set `version` to `'<version>:0'` and write the release notes. A package-only change on the same app version bumps the number after the colon (`:1`, `:2`, ...).
3. If the app changed how it is run (its port, data paths, environment variables, the `set-login` command), update `startos/main.ts`, `startos/actions/setLoginPassword.ts` and the README to match.
