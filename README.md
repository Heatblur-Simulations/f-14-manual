# F-14 Manual

<!-- markdown-link-check-disable-next-line -->
[![license](https://img.shields.io/badge/license-CC_BY--NC--ND_4.0-blue)](https://github.com/Heatblur-Simulations/f-14-manual/blob/master/LICENSE)

![Tomcat from back](src/img/tomcat_flying_back.jpg)

Manual of the F-14 Tomcat by Heatblur Simulations.
This is a [mdBook](https://rust-lang.github.io/mdBook/) project, content is
written in the language **Markdown** (`.md`).

<!-- markdown-link-check-disable -->
The manual is automatically exported as HTML version, hosted at
<https://f14.manuals.heatblur.se/>.
PDF versions are available from the
[release section](https://github.com/Heatblur-Simulations/f-14-manual/releases).
<!-- markdown-link-check-enable -->

## Setup
<!-- markdown-link-check-disable -->
Markdown is supported widely by most IDEs and text editors. We recommend
[VSC](https://code.visualstudio.com/) and any JetBrains IDE, such as
[Fleet](https://www.jetbrains.com/fleet/),
[IntelliJ](https://www.jetbrains.com/idea/) or
[CLion](https://www.jetbrains.com/clion/).
<!-- markdown-link-check-enable -->
You can also simply press `.` (dot) while on GitHub and it will open an instance
of Visual Studio Code right in your browser, allowing you to contribute directly
and conveniently.

Please read
[CONTRIBUTING.md](https://github.com/Heatblur-Simulations/f-14-manual/blob/master/CONTRIBUTING.md)
before your first contribution.

### Building locally

To build the website locally, you have to install **mdBook**, see
[here](https://rust-lang.github.io/mdBook/guide/installation.html).

<!-- markdown-link-check-disable -->
Then run the command `mdbook build` from this folder; the website can be found
in the folder `book/html`. Use `mdbook serve` to make the contents available in your
browser at [localhost:3000](http://localhost:3000/), it automatically updates
whenever the contents change.
<!-- markdown-link-check-enable -->

To build the PDF locally, use `cargo install mdbook-pdf` first. Then, when running `mdbook build`,
the PDF will be created in `book/pdf`.

## GH Pages

The project is automatically configured via a CI/CD to build and publish any
change to `master` to a GH-Pages branch called `html`. GitHub will automatically
publish the website on <https://heatblur-simulations.github.io/f-14-manual/>,
linked to <https://f14.manuals.heatblur.se/> via CNAME.

## PDF Deploy

<!-- markdown-link-check-disable -->
PDF versions are automatically build and published
at <https://github.com/Heatblur-Simulations/f-14-manual/releases> via CI/CD whenever a tag is
pushed to git.
<!-- markdown-link-check-enable -->
