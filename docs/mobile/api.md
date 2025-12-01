# Mobile ↔ Cloud API — Q-Ring V1

Base URL: https://api.qringtech.com/v1

## Endpoints (important)
- POST /auth/login               — returns access_token + refresh_token
- POST /auth/device/register     — register device public key
- POST /devices/{deviceId}/events — upload events/feature summaries
- GET  /users/{userId}/summary   — fetch aggregated user summary
- POST /users/{userId}/consent   — set analytics consent

## Token usage
- Include Authorization: Bearer <access_token> on all protected calls
- Refresh with POST /auth/refresh using refresh_token
