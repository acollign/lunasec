"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerBlur = exports.triggerFocus = void 0;
/**
 * Creates events in a cross-browser compatible way.
 * @param eventType String of the event type to pass.
 * @param bubbles True of false if the event should bubble up.
 */
function createEvent(eventType, bubbles) {
    if ("createEvent" in document) {
        const event = document.createEvent("Event");
        event.initEvent(eventType, bubbles, true);
        return event;
    }
    if ("Event" in window) {
        return new Event(eventType, { bubbles: bubbles, cancelable: true });
    }
    throw new Error('Unable to create a new event: Unknown environment');
}
/**
 * Forces an element to gain "focus" in the browser.
 * Note: Element must be visible to gain focus.
 * @param element Element to snap focus to.
 */
function triggerFocus(element) {
    const eventType = "onfocusin" in element ? "focusin" : "focus";
    const bubbles = "onfocusin" in element;
    "focus" in element && element.focus();
    element.dispatchEvent(createEvent(eventType, bubbles));
}
exports.triggerFocus = triggerFocus;
/**
 * Forces an element to lose "focus" in the browser.
 * Note: Element must be visible for this to succeed.
 * Note: If an element doesn't have focus prior to calling this function, blur may not trigger.
 * @param element Element to remove focus from.
 */
function triggerBlur(element) {
    element.blur();
    element.dispatchEvent(createEvent('blur', true));
}
exports.triggerBlur = triggerBlur;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1ldmVudC10cmlnZ2Vycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVsZW1lbnQtZXZlbnQtdHJpZ2dlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7R0FJRztBQUNILFNBQVMsV0FBVyxDQUFDLFNBQWlCLEVBQUUsT0FBZ0I7SUFDdEQsSUFBSSxhQUFhLElBQUksUUFBUSxFQUFFO1FBQzdCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLE9BQU8sSUFBSSxNQUFNLEVBQUU7UUFDckIsT0FBTyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ3JFO0lBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsWUFBWSxDQUFDLE9BQW1DO0lBQzlELE1BQU0sU0FBUyxHQUFHLFdBQVcsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQy9ELE1BQU0sT0FBTyxHQUFHLFdBQVcsSUFBSSxPQUFPLENBQUM7SUFFdkMsT0FBTyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDekQsQ0FBQztBQU5ELG9DQU1DO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixXQUFXLENBQUMsT0FBeUI7SUFDbkQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUhELGtDQUdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVzIGV2ZW50cyBpbiBhIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJsZSB3YXkuXG4gKiBAcGFyYW0gZXZlbnRUeXBlIFN0cmluZyBvZiB0aGUgZXZlbnQgdHlwZSB0byBwYXNzLlxuICogQHBhcmFtIGJ1YmJsZXMgVHJ1ZSBvZiBmYWxzZSBpZiB0aGUgZXZlbnQgc2hvdWxkIGJ1YmJsZSB1cC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcsIGJ1YmJsZXM6IGJvb2xlYW4pIHtcbiAgaWYgKFwiY3JlYXRlRXZlbnRcIiBpbiBkb2N1bWVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICBldmVudC5pbml0RXZlbnQoZXZlbnRUeXBlLCBidWJibGVzLCB0cnVlKTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICBpZiAoXCJFdmVudFwiIGluIHdpbmRvdykge1xuICAgIHJldHVybiBuZXcgRXZlbnQoZXZlbnRUeXBlLCB7IGJ1YmJsZXM6IGJ1YmJsZXMsIGNhbmNlbGFibGU6IHRydWUgfSk7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBjcmVhdGUgYSBuZXcgZXZlbnQ6IFVua25vd24gZW52aXJvbm1lbnQnKTtcbn1cblxuLyoqXG4gKiBGb3JjZXMgYW4gZWxlbWVudCB0byBnYWluIFwiZm9jdXNcIiBpbiB0aGUgYnJvd3Nlci5cbiAqIE5vdGU6IEVsZW1lbnQgbXVzdCBiZSB2aXNpYmxlIHRvIGdhaW4gZm9jdXMuXG4gKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIHNuYXAgZm9jdXMgdG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyRm9jdXMoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gXCJvbmZvY3VzaW5cIiBpbiBlbGVtZW50ID8gXCJmb2N1c2luXCIgOiBcImZvY3VzXCI7XG4gIGNvbnN0IGJ1YmJsZXMgPSBcIm9uZm9jdXNpblwiIGluIGVsZW1lbnQ7XG5cbiAgXCJmb2N1c1wiIGluIGVsZW1lbnQgJiYgZWxlbWVudC5mb2N1cygpO1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoZXZlbnRUeXBlLCBidWJibGVzKSk7XG59XG5cbi8qKlxuICogRm9yY2VzIGFuIGVsZW1lbnQgdG8gbG9zZSBcImZvY3VzXCIgaW4gdGhlIGJyb3dzZXIuXG4gKiBOb3RlOiBFbGVtZW50IG11c3QgYmUgdmlzaWJsZSBmb3IgdGhpcyB0byBzdWNjZWVkLlxuICogTm90ZTogSWYgYW4gZWxlbWVudCBkb2Vzbid0IGhhdmUgZm9jdXMgcHJpb3IgdG8gY2FsbGluZyB0aGlzIGZ1bmN0aW9uLCBibHVyIG1heSBub3QgdHJpZ2dlci5cbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gcmVtb3ZlIGZvY3VzIGZyb20uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyQmx1cihlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gIGVsZW1lbnQuYmx1cigpO1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoJ2JsdXInLCB0cnVlKSk7XG59XG4iXX0=