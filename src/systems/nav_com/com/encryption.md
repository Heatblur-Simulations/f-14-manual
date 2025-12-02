# TSEC/KY-28 Voice Security Equipment

> 🚧 TODO: Rework to add more imagery. Also fix the notes to use the new F-4 system.

The security equipment is integrated and operates with the VHF/UHF 2 and UHF 1 communication sets to
enable secure voice in a hostile environment. The KY-28 control panel on the RIO left side console
is the only cockpit control for operating the KY-28 in either cipher or plain-language modes.

The KY-28 has two basic modes of operation: plain (P) and cipher (C). The plain mode is used during
normal UHF communications. The cipher mode is used when secure voice communications are desired. The
radio sets must be ON to attain secure operation. The receiving station must be properly equipped to
receive transmissions in the proper cipher mode.

![ky-281](../../../img/ky-281.jpg)

| Control/Indicator       | Function                                                                                                                                                                                                                                                                                                                                              |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ZEROIZE switch**      | By lifting the guard the preloaded codes are erased and must be loaded on the ground before the cipher mode can be used again. In DCS this is done via the ground crew communications menu.                                                                                                                                                           |
| **Power-mode switch**   | P/OFF - UHF radio is used as a plain-language transceiver. Removes power from the system. C - Used to transmit and receive in secure mode (cipher) using preloaded codes. Also applies power to the system. To preload codes the system must be in this mode and power be applied. DELAY - Provides a time delay between PTT and actual transmission. |
| **Radio-select switch** | RELAY - Re-transmits information acting as a relay for other stations, increasing their range. (Not functional in DCS) RAD-2 - Selects V/UHF 2 for secure voice. RAD-1 - Selects UHF 1 for secure voice.                                                                                                                                              |

## KY-28 Operation

**Prelaunch:**

1. Determine that the proper code has been set by personnel qualified in voice security equipment.
   In DCS and in combination with SRS (Simple Radio) this is done through the ground crew
   communication menu in the DCS communications menu.
2. VHF/UHF radios - ON.
3. Power mode switch - C.
4. Radio selector - RAD-1 or RAD-2.
5. If a ground test of equipment is desired, establish two-way, plain-text radio communications on
   the plain-voice radio with a suitable remote station and request an equipment check. (In DCS
   another player is needed)
6. After a 2-minute warmup period, on the cipher-selected radio listen for a steady, unbroken tone
   in the headset followed by a double-pitched broken tone.
7. Key the appropriate radio selected for transmission, hold for approximately 2 seconds, and
   release. The double-pitched broken tone will cease and no sound will be heard.
8. Key radio and hold. A single-beep tone will be heard in approximately 1-1/2 seconds. When this
   tone is heard, the equipment is ready to cipher transmission.
9. After the beep tone is heard, establish two-way cipher radio communications with a cooperating
   ground station and check for readability and signal strength.
10. Set power mode and radio selector switches in accordance with the tactical situation.

💡 The above procedures may be used to perform an in-flight check of the equipment.

**Postlaunch:**

The speech security equipment shall be operated as briefed.

> 💡 If ZEROIZE is pressed during flight, ciphered communication is not possible. The code
> can only be reset (or changed) through the ground crew communications menu after landing.

**After Landing:**

1. ZEROIZE switch - ZEROIZE (as briefed).
2. Power switch - OFF.

> 💡 If ZEROIZE has been pressed and the POWER MODE switch is in C, both crewmembers will be
> warned by a continuing beeping sound.
