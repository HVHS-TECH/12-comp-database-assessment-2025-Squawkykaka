{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
  };
  outputs =
    {
      self,
      nixpkgs,
      utils,
    }:
    utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            firebase-tools
            nodejs_20
            eslint
            patchelf
            pnpm
          ];

          shellHook = ''
            patchelf --set-interpreter "$(cat $NIX_CC/nix-support/dynamic-linker)" node_modules/.pnpm/@cloudflare+workerd-linux-64@1.20250617.0/node_modules/@cloudflare/workerd-linux-64/bin/workerd
          '';
        };
      }
    );
}
