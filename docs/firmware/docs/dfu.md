# OTA / DFU (Device Firmware Update) Instructions

## Overview
Support secure OTA (DFU) to allow firmware updates without opening the device. Recommended approach depends on MCU:

- **nRF52 (Nordic)**: use Nordic DFU (MCUBoot + DFU over BLE) or vendor SDK DFU
- **ESP32**: use built-in OTA via partition table and secure boot where available

## Requirements
- Secure bootloader or validated image signature
- Firmware image signing (private key held by dev team)
- Rollback support to previous stable image
- Update progress and verification on device and app

## Nordic nRF52 recommended flow
1. Implement or use Nordic's secure DFU bootloader (MCUboot or SDK provided DFU).
2. App uploads firmware image to the device via BLE (DFU Control Point).
3. Device stores image in external flash or reserved area, verifies signature, and reboots to new image.
4. Device reports status: pending, applying, success, rollback on fail.

## ESP32 recommended flow
1. Use OTA partitions: factory, ota_0, ota_1.
2. App uploads new binary to the device over BLE or Wi-Fi (if available).
3. Device writes to inactive partition and sets boot flag to new partition.
4. On boot, validate CRC/signature; fallback if validation fails.

## Security
- Sign firmware images with developer private key.
- Verify signatures on device before applying.
- Use HTTPS for download endpoints if OTA triggered from cloud.

## Testing
- Test DFU on bench units using faulty images to ensure rollback works.
- Test resume capability on interrupted transfers.
