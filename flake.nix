{
  description = "Devshell for Fenixreborn website's development";

  inputs.nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-24.11";

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };
    in {
      devShells.x86_64-linux.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nixd
          nixfmt
          nodejs
          docker
          docker-compose
          prisma-engines
          openssl
        ];
        shellHook = ''
          export PKG_CONFIG_PATH="${pkgs.openssl}/lib/pkgconfig";
          export PRISMA_SCHEMA_ENGINE_BINARY="${pkgs.prisma-engines}/bin/schema-engine"
          export PRISMA_QUERY_ENGINE_BINARY="${pkgs.prisma-engines}/bin/query-engine"
          export PRISMA_QUERY_ENGINE_LIBRARY="${pkgs.prisma-engines}/lib/libquery_engine.node"
          export PRISMA_FMT_BINARY="${pkgs.prisma-engines}/bin/prisma-fmt"
        '';
      };
    };
}
