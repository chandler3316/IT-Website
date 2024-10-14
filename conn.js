// Example of dynamically updating the next meeting date
document.addEventListener("DOMContentLoaded", function() {
    const meetingElement = document.getElementById("meeting-details");

    const nextMeetingParagraph = document.createElement("p");
    nextMeetingParagraph.innerHTML = `<strong>Next Meeting:</strong> ${nextMeetingDate.toDateString()}`;
    meetingElement.appendChild(nextMeetingParagraph);
});
