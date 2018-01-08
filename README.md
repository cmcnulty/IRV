irv
===

Instant-runoff voting tool

This webapp calculates the result of an
[instant-runoff vote](https://en.wikipedia.org/wiki/Instant-runoff_voting).
It's programmed with javascript powered by [jQuery](http://jquery.com/) and
structured and styled with HTML and CSS on the basis of
[bootstrap](http://getbootstrap.com/). The Sourcecode is licensed under the
[MIT License](http://opensource.org/licenses/MIT), contributions are welcome.
The code is [unit-tested](http://cmcnulty.github.io/IRV/test/) with
[QUnit](http://qunitjs.com/), but that doesn't guarantee it being bug free. It
was written by [Peter Grassberger](http://petergrassberger.com) aka.
[PeterTheOne](https://twitter.com/PeterTheOne).

This fork changes the interpretation of the ballot - rather than a matrix 
of the original ballot with the choices at the same index as the original ballot, 
this fork uses the index of your choice as the order of preference, 
and the value is the original index of the ballot.

Code status
-----------
[![Build Status](https://travis-ci.org/cmcnulty/IRV.svg?branch=master)](https://travis-ci.org/cmcnulty/IRV)
