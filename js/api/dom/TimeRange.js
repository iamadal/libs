// Time Range

/* When loading a media resource for use by an <audio> or <video> element, the
TimeRanges interface is used for representing the time ranges of the media
resource that have been buffered, the time ranges that have been played, and
the time ranges that are seekable.

A TimeRanges object includes one or more ranges of time, each specified by a
starting time offset and an ending time offset. You reference each time range
by using the start() and end() methods, passing the index number of the time
range you want to retrieve. */


// Normalized TimeRanges objects

/* Several members of HTMLMediaElement objects return a normalized TimeRanges
object — which the spec describes as having the following characteristics:

The ranges in such an object are ordered, don't overlap, and don't touch
(adjacent ranges are folded into one bigger range). A range can be empty
(referencing just a single moment in time). */


// Properties

TimeRanges.length // Read only Returns an unsigned long representing the number of time ranges represented by the time range object.


// Methods

TimeRanges.start() // Returns the time for the start of the range with the specified index.
TimeRanges.end() // Returns the time for the end of the specified range.



