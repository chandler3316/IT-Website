document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    // Add fade class to each section and its subheading (h2)
    sections.forEach((section) => {
        section.classList.add("fade");
        
        // Target the h2 subheading within each section
        const heading = section.querySelector("h2");
        if (heading) {
            heading.classList.add("fade");
        }
    });

    // Intersection Observer to detect when sections and headings are in view
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-visible");
                } else {
                    entry.target.classList.remove("fade-visible");
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    // Observe each section and its heading separately for independent control
    sections.forEach((section) => {
        observer.observe(section);
        
        const heading = section.querySelector("h2");
        if (heading) {
            observer.observe(heading);
        }
    });

    // Date setup for next meeting
    const meetingElement = document.getElementById("meeting-details");
    const nextMeetingDate = new Date();
    nextMeetingDate.setDate(nextMeetingDate.getDate() + (2 - nextMeetingDate.getDay() + 7) % 7); // Set to next Tuesday

    const nextMeetingParagraph = document.createElement("p");
    nextMeetingParagraph.innerHTML = `<strong>Next Meeting:</strong> ${nextMeetingDate.toDateString()}`;
    meetingElement.appendChild(nextMeetingParagraph);
});
