# ULR Shortener

1. Gather Requirements
2. API Design / Database Design
3. High-Level Design
4. Deep Dives

## Rquirements

### `Functional Requirements`

1. URL Shortening - Get uniquer URL
2. URL Redirection
3. Link Analytic

### `Non-Functional Requirements`

1. Minimize redirect latency
2. 100M DAU
3. 1B reads per day = 10K RPS
4. 1-5B total lifetime URLs

## API Design

`POST` /api/urls/shorten
Req: Long URL
Res: Shrot URL

`GET` /api/urls/{shortUrl}
Res: Redirect 301

**Status 300**

- 300: Redirect
- 301: Caching
- 302: without Caching

**Caching in HTML**
//TODO
