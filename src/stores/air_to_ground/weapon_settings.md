# Air-to-Ground Weapon Settings

> 🚧 TODO: Rewrite this page to include more imagery and for accuracy.

![Armament Panel](images/armamentpanel1.jpg) The air-to-ground weapon delivery is set up by the RIO
on his armament panel on the left vertical panel of the RIO cockpit.

The type of munition for delivery is set up by the wheel on the top of the panel, turning it to the
correct munition. This configures the WCS with the correct parameters for the selected munition.

**Note:** The Mk-81, 82, and 83 have both an L and an H option for low-drag and high-drag versions,
respectively.

Under **DLVY MODE** (delivery mode), it is possible to set STP/RPL (step/ripple) and SGL/PRS
(single/pairs). The possible combinations are:

- **STP and SGL**: Releases one store with each depression of the bomb release button on the pilot
  stick.
- **STP and PRS**: As with STP and SGL but each depression of the bomb release button on the pilot
  stick releases a pair of stores. Only works for paired stations, 1 with 8, 3 with 6, and 4 with 5.
- **RPL and SGL**: Used with all attack modes, each depression of the bomb release button on the
  pilot stick releases a set amount of stores set by the **QTY** (quantity) wheels with the interval
  set by the **INTERVAL** wheels (in milliseconds).
- **RPL and PRS**: As RPL and SGL but each release pulse releases a pair of stores, **QTY** still
  sets the total amount of stores to be released.

The **MECH FUSE** switch sets which mechanical fuse to arm on the stores. **NOSE** arms the nose
fuse, **SAFE** inhibits arming of the fuses, and **NOSE/TAIL** arms both fuses.

The **ELEC FUSE** selector knob sets the electrical fuse of the store to be released:

- **SAFE**: Inhibits electrical bomb fusing.
- **VT**: Sets air-burst mode at preset burst height for compatible stores.
- **INST**: Sets instantaneous burst mode.
- **DLY 1**: Sets preset time delay 1.
- **DLY 2**: Sets preset time delay 2.

The **INTERVAL** and **QTY** (quantity) wheels set the release interval (in milliseconds) and
quantity of stores to be released, compatible with the delivery modes as seen above under **DLVY
MODE**.

Lastly, the **6 STA SEL** (station select) switches set which pylons to use for store delivery (also
used for selection of what stores to jettison). To select a pylon for store delivery, set the
corresponding switch to **SEL**. Stations 1 and 8 should be set to **B** for selection, **SW** was
used to jettison AIM-9 Sidewinders but is now inoperable.

**Note:** All F-14 bombs in DCS are assumed to have both types of fuzes, so both the mechanical and
electrical fuze need to be set. GBUs, Mk-20s, and Mk-81 to 84s need the mechanical fuze set to
either **N** or **N/T** settings, the Mk-82AIR (ballute) and Mk-82 Snake-Eye can be dropped in
free-fall with **N** and retarded with **N/T**.
