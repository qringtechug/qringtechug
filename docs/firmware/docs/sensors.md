# Sensor Integration & Driver Notes

This file documents recommended sensors, wiring, driver notes, calibration tips, and pitfalls.

## 1. PPG (MAX30102 / MAX30105)
- **Interface:** I2C
- **Pins:** SDA, SCL, INT (optional)
- **Sampling:** 100–200 Hz for HR/HRV windows
- **Driver notes:**
  - Use LED current control to minimize power; increase current for noisy conditions briefly.
  - Implement ambient light cancellation and include an optical shield or rubber gasket for skin contact.
  - Remove high-motion windows using IMU flags.
- **Calibration:**
  - On onboarding, gather 5–10 minutes of baseline resting data.
  - Calibrate peak detection thresholds per user baseline.

## 2. GSR (Electrodermal Activity)
- **Interface:** ADC (single-ended differential recommended using instrumentation amplifier)
- **Pins:** Two skin-contact electrodes on inner ring
- **Sampling:** 10–50 Hz
- **Driver notes:**
  - Use high input impedance amplifier to avoid bias current issues.
  - Apply digital low-pass for tonic and a faster high-pass for phasic SCR detection.
  - Ensure electrode material is skin-safe (gold-plated or Ag/AgCl).
- **Calibration:**
  - Compute tonic baseline over first 7 days and adjust thresholds for SCR events.

## 3. Temperature (TMP117 or thermistor)
- **Interface:** I2C (for TMP117) or ADC for thermistor
- **Use:** small deltas often meaningful (stress-related vasoconstriction)
- **Sampling:** 1–5 Hz

## 4. IMU (MPU6050 / ICM-20948)
- **Interface:** I2C / SPI
- **Sampling:** 50–100 Hz for micro-motion detection
- **Driver notes:**
  - Use low-power modes; enable high-rate sampling only during active measurement windows.
  - Implement step/activity classification to mask PPG during heavy motion.

## 5. Haptics & Feedback
- **Haptic motor:** coin/ER or LRA for subtle vibration
- **Driver:** simple MOSFET or haptic driver IC
- **Power:** high current draw for short durations — account for battery peaks.

## 6. Battery & Charging
- **Battery protection:** use dedicated protection IC
- **Charger:** TP4056 or integrated charging for prototypes
- **Monitor:** use ADC to sample battery voltage or fuel gauge IC for accurate SOC

## 7. Wiring & PCB Layout
- Keep analog sensor traces short and away from high-frequency switching supplies.
- Separate analog ground plane from digital ground where possible; tie at single point.

## 8. Testing tips
- Record raw sensor traces during bench tests and replay into algorithm unit tests.
- Validate PPG HR vs. chest-strap ECG reference for accuracy benchmarking.
