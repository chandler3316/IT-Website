document.addEventListener("DOMContentLoaded", function() {
    const meetingElement = document.getElementById("meeting-details");

    // Date setup for next meeting
    const nextMeetingDate = new Date();
    nextMeetingDate.setDate(nextMeetingDate.getDate() + (2 - nextMeetingDate.getDay() + 7) % 7); // Set to next Tuesday

    const nextMeetingParagraph = document.createElement("p");
    nextMeetingParagraph.innerHTML = `<strong>Next Meeting:</strong> ${nextMeetingDate.toDateString()}`;
    meetingElement.appendChild(nextMeetingParagraph);
});
