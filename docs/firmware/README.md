# Firmware — Q-Ring V1

This folder contains firmware documentation, design notes, and examples for the Q-Ring V1 wearable.

## Purpose
Firmware is responsible for:
- Reading sensors (PPG, GSR, Temp, IMU)
- Preprocessing and feature extraction
- Power management and duty cycling
- BLE communication (GATT services)
- On-device TinyML inference (optional) or streaming features to the mobile app
- OTA / DFU update support

## Structure
- `firmware/docs/` — architecture, sensor guides, DFU instructions
- `firmware/examples/` — starter code and sample projects
- `firmware/src/` — place for production code (add when ready)
- `firmware/tools/` — scripts and test utilities

## Getting started (developer)
1. Review `firmware/docs/flow.md` and `firmware/docs/sensors.md`.
2. Use an nRF52840 dev kit or ESP32 dev board for prototyping.
3. Copy example code into your dev environment (PlatformIO or Arduino).
4. Run local tests and connect the mobile app for BLE integration.

## Contacts
- Firmware owner: Joel Buyus — qringtechug@gmail.com

