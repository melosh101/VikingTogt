FROM oven/bun:alpine AS builder
WORKDIR /builder
COPY . .

RUN bun i --no-cache

RUN bun run build


FROM oven/bun AS runner

COPY --from=builder /builder/dist .

CMD ["bun run serve"]