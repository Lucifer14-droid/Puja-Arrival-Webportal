<?php
/**
 * Devi Paksha - PHP Entry Point
 * Serves song data via AJAX and renders the site
 */

// Route API calls to songs.php
if (isset($_GET['api']) && $_GET['api'] === 'songs') {
    require __DIR__ . '/php/songs.php';
    exit;
}

// Durga Puja countdown target (16 October 2026, Bangladesh Time = Asia/Dhaka UTC+6)
$puja_date = new DateTime('2026-10-16 00:00:00', new DateTimeZone('Asia/Dhaka'));
$now       = new DateTime('now', new DateTimeZone('Asia/Dhaka'));
$diff      = $puja_date->diff($now);

$days  = max(0, (int)$diff->format('%a'));
$hours = max(0, (int)$diff->h);
$mins  = max(0, (int)$diff->i);
$secs  = max(0, (int)$diff->s);

// If Puja has already passed, show zeros
if ($now > $puja_date) { $days = $hours = $mins = $secs = 0; }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ma Durga Asche</title>
    <meta name="description" content="Ma Durga Asche — a countdown to Durga Pujo, with music for the season." />

    <!-- Open Graph -->
    <meta property="og:title"       content="Ma Durga Asche" />
    <meta property="og:description" content="Ma Durga Asche — a countdown to Durga Pujo, with music for the season." />
    <meta property="og:type"        content="website" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Galada&family=DM+Serif+Display&family=Poppins:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="css/style.css" />

    <!-- PHP-injected initial values so page renders without JS flicker -->
    <script>
        window.__INITIAL_COUNTDOWN__ = {
            days:  <?php echo $days; ?>,
            hours: <?php echo $hours; ?>,
            mins:  <?php echo $mins; ?>,
            secs:  <?php echo $secs; ?>
        };
    </script>
</head>
<body>

<!-- ======================================================
     DECORATIVE BACKGROUND
     ====================================================== -->
<div class="bg-wrap" aria-hidden="true">
    <div class="bg-gradient"></div>
    <div class="bg-blob"></div>
    <div class="bg-blob"></div>
    <div class="bg-blob"></div>
    <div class="particles" id="particles"></div>
</div>

<!-- ======================================================
     APP WRAPPER
     ====================================================== -->
<div class="app">

    <!-- NAV -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <a href="#" class="nav-logo" aria-label="Ma Durga Asche home">মা দুর্গা আসছে</a>

        <div class="nav-right">
            <button id="btn-open-playlist" class="btn-pill" aria-label="Open playlists">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/>
                </svg>
                <span id="pill-label">PUJA RADIO</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M7 10l5 5 5-5z"/>
                </svg>
            </button>

            <button id="btn-open-dev" class="btn-pill" aria-label="About developer">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
                <span>Developer</span>
            </button>
        </div>
    </nav>

    <!-- MAIN / HERO -->
    <main class="hero" role="main">

        <!-- Countdown (server-rendered initial values) -->
        <section class="countdown-section" aria-label="Countdown to Durga Puja">
            <p class="countdown-label">Durga Puja begins in</p>
            <div class="countdown-grid" role="timer" aria-live="polite">
                <div class="count-block">
                    <span class="count-num" id="cd-days"><?php echo str_pad($days, 2, '0', STR_PAD_LEFT); ?></span>
                    <span class="count-unit">Days</span>
                </div>
                <span class="count-sep" aria-hidden="true">:</span>
                <div class="count-block">
                    <span class="count-num" id="cd-hrs"><?php echo str_pad($hours, 2, '0', STR_PAD_LEFT); ?></span>
                    <span class="count-unit">Hrs</span>
                </div>
                <span class="count-sep" aria-hidden="true">:</span>
                <div class="count-block">
                    <span class="count-num" id="cd-mins"><?php echo str_pad($mins, 2, '0', STR_PAD_LEFT); ?></span>
                    <span class="count-unit">Min</span>
                </div>
                <span class="count-sep" aria-hidden="true">:</span>
                <div class="count-block">
                    <span class="count-num" id="cd-secs"><?php echo str_pad($secs, 2, '0', STR_PAD_LEFT); ?></span>
                    <span class="count-unit">Sec</span>
                </div>
            </div>
        </section>

        <h1 class="hero-title">Ma Durga Asche</h1>
        <p class="hero-title-bn">মা দুর্গা আসছে</p>
        <p class="hero-tagline">A countdown to Durga Pujo, with music for the season.</p>

    </main>

    <!-- ====================================================
         FIXED PLAYER BAR
         ==================================================== -->
    <div class="player-bar" role="region" aria-label="Music player">
        <div class="player-inner">
            <div class="player-main">
                <div class="player-art">
                    <img id="player-art-img" src="" alt="Album art" />
                </div>
                <div class="player-info">
                    <p class="player-title"    id="player-title">Loading...</p>
                    <p class="player-subtitle" id="player-subtitle"></p>
                    <div class="seek-wrap">
                        <div class="seek-bar-track" id="seek-bar-track" role="slider"
                             aria-label="Seek" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                            <div class="seek-bar-fill" id="seek-fill" style="width:0%"></div>
                        </div>
                        <div class="seek-times">
                            <span id="current-time">0:00</span>
                            <span id="total-time">0:00</span>
                        </div>
                    </div>
                </div>
                <div class="player-controls">
                    <button id="btn-shuffle" class="btn-ctrl" aria-label="Shuffle off" aria-pressed="false" style="display:none">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17zm4.76-.5l3.65 3.65-3.65 3.65V14h-1.76L7.41 7.41 6 6l-1.41 1.41L10.17 13H8v2h4.59l3.41 3.41V20l4-4-4-4v1.67zm-8.76 9.92L4 20l1.41 1.41 4.17-4.17z"/>
                        </svg>
                    </button>
                    <button id="btn-prev" class="btn-ctrl" aria-label="Previous track">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                        </svg>
                    </button>
                    <button id="btn-play" class="btn-play-main" aria-label="Play" aria-pressed="false">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </button>
                    <button id="btn-next" class="btn-ctrl" aria-label="Next track">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M16 6h2v12h-2zm-2 6L5.5 6v12z"/>
                        </svg>
                    </button>
                    <button id="btn-repeat" class="btn-ctrl" aria-label="Repeat off" aria-pressed="false" style="display:none">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="player-extra-mobile">
                <button id="btn-shuffle-mob" class="btn-extra-mob" aria-label="Shuffle" aria-pressed="false">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17zm4.76-.5l3.65 3.65-3.65 3.65V14h-1.76L7.41 7.41 6 6l-1.41 1.41L10.17 13H8v2h4.59l3.41 3.41V20l4-4-4-4v1.67zm-8.76 9.92L4 20l1.41 1.41 4.17-4.17z"/>
                    </svg>
                    Shuffle
                </button>
                <button id="btn-repeat-mob" class="btn-extra-mob" aria-label="Repeat" aria-pressed="false">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
                    </svg>
                    Repeat
                </button>
                <button id="btn-open-playlist-mob" class="btn-extra-mob" aria-label="Playlists">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/>
                    </svg>
                    Playlist
                </button>
            </div>
        </div>
    </div>

</div><!-- /.app -->

<!-- ====================================================
     PLAYLIST MODAL
     ==================================================== -->
<div id="playlist-modal" class="modal-overlay hidden" role="dialog" aria-modal="true" aria-label="Playlists">
    <div id="playlist-backdrop" class="modal-backdrop"></div>
    <div class="modal-box">
        <div class="modal-header">
            <h2 class="modal-heading">Playlists</h2>
            <button id="close-playlist-modal" class="btn-close" aria-label="Close">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
            </button>
        </div>
        <div class="modal-tabs" role="tablist">
            <button class="tab-btn active" data-playlist="durgaPuja"  role="tab">Durga Puja</button>
            <button class="tab-btn"        data-playlist="ogMahalaya" role="tab">Mahalaya</button>
            <button class="tab-btn"        data-playlist="mahalaya"   role="tab">Mahalaya Songs</button>
        </div>
        <p id="playlist-desc" class="modal-desc">The main curated Durga Puja playlist.</p>
        <div id="track-list" class="track-list" role="listbox" aria-label="Tracks"></div>
    </div>
</div>

<!-- ====================================================
     DEVELOPERS MODAL
     ==================================================== -->
<div id="dev-modal" class="modal-overlay hidden" role="dialog" aria-modal="true" aria-label="Developer">
    <div id="dev-backdrop" class="modal-backdrop"></div>
    <div class="modal-box modal-dev-box">
        <div class="modal-header">
            <div class="modal-title-wrap">
                <span class="modal-subheading">Creator Profile</span>
                <h2 class="modal-heading">Made with Bhalobasha</h2>
            </div>
            <button id="close-dev-modal" class="btn-close" aria-label="Close">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
            </button>
        </div>

        <div class="dev-modal-body">
            <!-- Hero Showcase Card -->
            <div class="dev-showcase-card">
                <div class="dev-avatar-container">
                    <div class="dev-avatar-aura"></div>
                    <div class="dev-avatar-ring">
                        <img src="images/sujoy.png" alt="Sujoy Sarker" class="dev-avatar-img" loading="lazy" />
                    </div>
                    <div class="dev-badge-verified" title="Verified Creator">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                </div>

                <div class="dev-info">
                    <div class="dev-tag-pill">Lead Developer &amp; Designer</div>
                    <h3 class="dev-creator-name">Sujoy Sarker</h3>
                    <p class="dev-creator-bio">Crafted with devotion &amp; festive spirit for Durga Puja 2026</p>
                </div>

                <!-- Luxury Social Links -->
                <div class="dev-social-row">
                    <a href="https://www.facebook.com/sujoy.sarker.9849" target="_blank" rel="noopener noreferrer"
                       class="dev-social-pill dev-social-fb" aria-label="Facebook">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/_itsmesuji_/" target="_blank" rel="noopener noreferrer"
                       class="dev-social-pill dev-social-insta" aria-label="Instagram">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        <span>Instagram</span>
                    </a>
                    <a href="https://wa.me/8801770400652" target="_blank" rel="noopener noreferrer"
                       class="dev-social-pill dev-social-wa" aria-label="WhatsApp">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.761.814 2.796.814 3.181 0 5.768-2.587 5.769-5.766.001-3.18-2.586-5.766-5.77-5.766zm0 10.428c-.887 0-1.591-.247-2.316-.677l-.166-.099-1.579.414.421-1.54-.108-.172c-.476-.757-.727-1.472-.726-2.588.001-2.457 2.001-4.457 4.46-4.457 2.457 0 4.458 2.001 4.458 4.458 0 2.458-2.001 4.459-4.448 4.459zm2.443-3.344c-.134-.067-.794-.392-.917-.437-.123-.045-.213-.067-.303.067-.09.134-.347.437-.426.527-.079.09-.157.101-.291.034-.134-.067-.567-.209-1.079-.666-.398-.355-.668-.794-.746-.928-.078-.135-.008-.207.059-.274.061-.06.134-.157.202-.236.067-.078.09-.134.135-.224.045-.09.022-.169-.011-.236-.034-.067-.303-.73-.415-1.001-.11-.264-.222-.228-.303-.232l-.258-.004c-.09 0-.236.034-.36.169s-.472.46-.472 1.124.483 1.303.55 1.393c.068.09 1.004 1.533 2.433 2.15.34.147.606.235.813.301.341.108.652.093.897.056.274-.041.844-.345.964-.679.119-.334.119-.62.084-.679-.035-.06-.124-.09-.258-.157zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.155-.477-4.437-1.299l-.318-.203-2.957.776.789-2.884-.223-.355A8.175 8.175 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z"/></svg>
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>

            <!-- Direct Quick Connect Section -->
            <div class="dev-quick-connect">
                <div class="dev-section-label">
                    <span>Direct Inquiries</span>
                </div>

                <div class="dev-contact-cards">
                    <!-- Email Row -->
                    <div class="dev-contact-row">
                        <div class="dev-contact-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </div>
                        <div class="dev-contact-details">
                            <span class="dev-contact-type">Email Address</span>
                            <a href="mailto:sujoy.sarker1323@gmail.com" class="dev-contact-value">sujoy.sarker1323@gmail.com</a>
                        </div>
                        <button id="copy-email-btn" class="dev-copy-action" aria-label="Copy email address" title="Copy to clipboard">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                            <span class="copy-label-text">Copy</span>
                        </button>
                    </div>

                    <!-- WhatsApp Row -->
                    <div class="dev-contact-row">
                        <div class="dev-contact-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                        </div>
                        <div class="dev-contact-details">
                            <span class="dev-contact-type">WhatsApp / Phone</span>
                            <a href="https://wa.me/8801770400652" target="_blank" rel="noopener noreferrer" class="dev-contact-value">+8801770400652</a>
                        </div>
                        <button id="copy-whatsapp-btn" class="dev-copy-action" aria-label="Copy WhatsApp number" title="Copy to clipboard">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                            <span class="copy-label-text">Copy</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Warm Festive Footer Note -->
            <div class="dev-modal-footer-note">
                <span class="festive-sparkle">✨</span>
                <span>May Maa Durga's blessings fill your life with eternal joy &amp; light.</span>
            </div>
        </div>
    </div>
</div>
<!-- Hidden YouTube player -->
<div id="yt-player" style="position:fixed;left:0;top:0;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;" aria-hidden="true"></div>

<script src="js/app.js"></script>
<script>
// Wire mobile playlist button
document.getElementById('btn-open-playlist-mob')?.addEventListener('click', () => openModal('playlist-modal'));

// Show desktop shuffle/repeat above 600px
(function() {
    function checkWidth() {
        const isWide = window.innerWidth >= 600;
        ['btn-shuffle','btn-repeat'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = isWide ? 'grid' : 'none';
        });
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
})();
</script>

</body>
</html>
