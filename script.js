$(document).ready(function () {
    // Language Selection
    $('#languageSelect').change(function () {
        var selectedLanguage = $(this).val();
        // Implement language change logic here
    });

    // Progress Tracking
    $(window).on('scroll', function () {
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
        $('#progress').val(scrollPercent);
    });
});

// Update progress when a section/subsection is completed
function updateProgress(section) {
    progress[section] = true;
    updateProgressBar();
}

// Update progress bar based on completion status
function updateProgressBar() {
    let completedSections = Object.values(progress).filter(status => status).length;
    let totalSections = Object.keys(progress).length;
    let progressPercentage = (completedSections / totalSections) * 100;
    document.querySelector('progress').value = progressPercentage;
}

