# BLE Integration — Q-Ring V1 (Mobile)

## Goals
- Discover Q-Ring devices
- Securely pair & bond
- Subscribe to notifications for:
  - Feature Vector characteristic (UUID: c1a7f120-...)
  - Emotion Event characteristic (UUID: 1f72d6e0-...)
  - Battery (UUID: 9cdcae78-...)

## Pairing flow (mobile)
1. Request BLE permission
2. Scan for devices advertising "Q-Ring"
3. Show device list: display simple device ID and battery
4. Initiate pairing and bonding (secure connection)
5. On successful pairing, save bonded device ID and public key

## Example: subscribe to notifications (pseudocode)
- connect(device)
- subscribe(device, FEATURE_VECTOR_UUID, onFeature)
- subscribe(device, EMOTION_EVENT_UUID, onEvent)

## Security
- Validate device public key via `POST /auth/device/verify` after onboarding
- Ensure BLE link-level encryption and app-level token signing
