// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            // Footer
            'footer_about': "About Us",
            'footer_mission': "Our Mission",
            'footer_history': "History",
            'footer_connect': "Connect",
            'footer_contact': "Contact Us",
            'footer_membership': "Membership",
            'footer_rights': "© 2025 Badan Warisan Malaysia. All rights reserved.",

            // Landing Page
            "banner_title": "Welcome to BWM, <br /> Badan Warisan Malaysia",
            "banner_sub": "Malaysia's leading heritage advocate since 1983",
            "get_start_btn": "Get Started",
            "explore_btn": "Our Heritage",

            // Register Page
            "auth_title": "Badan Warisan Malaysia",
            "join_header": "Join Us Today",
            "join_desc": "Become a member and help us preserve Malaysia's architectural and cultural heritage for future generations.",
            "signup_cta": "Sign up now to support heritage advocacy and enjoy exclusive member benefits.",

            // Register Form 1
            "placeholder_email": "Email Address",
            "placeholder_first_name": "First Name",
            "placeholder_last_name": "Last Name",
            "placeholder_phone": "Phone Number",
            "placeholder_dob": "Date of Birth",
            "btn_next": "Next",
            "btn_go_to_login": "Go to Login",
            "already_have_account": "Already have an account?",

            // Register Form 2
            "register_title_2": "Complete Your Profile",
            "signup2_subtitle": "Please set your password to complete your membership registration.",
            "placeholder_pwd": "Password",
            "placeholder_confirm_pwd": "Confirm Password",
            "btn_complete": "Complete Sign Up",
            "btn_back": "Back",
            "toast_mismatch": "Passwords do not match",
            "toast_success": "🎉 Registration successful!",
            "toast_failed": "❌ Registration failed.",
            "toast_missing": "Missing registration data.",

            // Login Page
            "login_title": "Return to the Legacy",
            "login_subtitle": "Step back into the guardianship of Malaysia's soul. Your journey in preserving our living history continues here.",
            "btn_login": "Log into the Archive",
            "forgot_password": "Lost your way? Reset password",
            'logout':'Log Out',

            // Dashboard Categories
            "categories": {
                "all": "All",
                "architecture": "Architecture",
                "restoration": "Restoration",
                "history": "History",
                "culture": "Culture",
                "archaeology": "Archaeology"
            },

            // Media Labels
            "media_labels": {
                "video": "Video",
                "image": "Image",
                "document": "Document"
            },

            'stats_label': {
                'views': 'Views',
                'likes': 'Likes',
                'shares': 'Shares',
                'downloads': 'Downloads',
            },

            // Heritage Item Content
            "heritage": {
                "h1": {
                    "title": "The Secrets of Rumah Penghulu Abu Seman",
                    "description": "An exploration of traditional Malay architecture."
                },
                "h2": {
                    "title": "Conservation Guidelines 2024",
                    "description": "Official guidelines for restoration projects."
                },
                "h3": {
                    "title": "Rare Photography: KL in the 1950s",
                    "description": "Kuala Lumpur's past through photography."
                },
                "h4": {
                    "title": "Traditional Crafts of Malaysia",
                    "description": "A deep dive into Malaysia’s traditional crafts and artisans."
                },
                "h5": {
                    "title": "Educational Programmes at Rumah Penghulu Abu Seman",
                    "description": "A look at the educational initiatives at the heritage site."
                }
            },

            // Search Placeholder
            "search_placeholder": "Search",

            // buy button
            'unlock_content': "Unlock Full Access",

            // load more
            'load_more': "Load More",

            // shopping cart
            'shopping_cart': "SHOPPING CART",

            // checkout
            'checkout': "Checkout",
            'total': "Total",
            'pay_now': "Pay Now",
            'total_payment': "Total Payment",
            'select_payment_method': 'Select Payment Method',
            'select': 'Select',

            // label
            'fpx': 'FPX (Online Banking)',
            'card': 'Card',
            'ewallet': 'E-Wallet',

            // error code
            'error': {
                "404": {
                    title: "404",
                    message: "Sorry, the page you're looking for doesn't exist.",
                    color: "#4c7c14"
                },
                "403": {
                    title: "403",
                    message: "Access Denied. You don't have permission to see this.",
                    color: "#d32f2f" // Red for errors
                },
                "500": {
                    title: "500",
                    message: "Internal Server Error. Something went wrong on our end.",
                    color: "#1976d2" // Blue for server info
                },

            },
            'btn_back_to_dashboard': 'Back to Dashboard',

            // profile
            'personal_details': 'Personal Details',
            'save': 'Save',
            'edit': 'Edit',
            'member_label': 'Member',
            'staff_label': 'Staff'
        },

    },
    ms: {
        translation: {
            // Footer
            'footer_about': "Tentang Kami",
            'footer_mission': "Misi Kami",
            'footer_history': "Sejarah",
            'footer_connect': "Sambung",
            'footer_contact': "Hubungi Kami",
            'footer_membership': "Keahlian",
            'footer_rights': "© 2025 Badan Warisan Malaysia. Hak Cipta Terpelihara.",

            // Landing Page
            "banner_title": "Selamat Datang ke BWM, <br /> Badan Warisan Malaysia",
            "banner_sub": "Penyokong warisan terkemuka Malaysia sejak 1983",
            "get_start_btn": "Mula Sekarang",
            "explore_btn": "Warisan Kami",

            // Register Page
            "auth_title": "Badan Warisan Malaysia",
            "join_header": "Sertai Kami Hari Ini",
            "join_desc": "Jadi ahli dan bantu kami memelihara warisan seni bina dan budaya Malaysia untuk generasi akan datang.",
            "signup_cta": "Daftar sekarang untuk menyokong advokasi warisan dan nikmati faedah eksklusif ahli.",

            // Form Register 1
            "placeholder_email": "Alamat Emel",
            "placeholder_first_name": "Nama Pertama",
            "placeholder_last_name": "Nama Akhir",
            "placeholder_phone": "No. Telefon",
            "placeholder_dob": "Tarikh Lahir",
            "btn_next": "Seterusnya",
            "btn_go_to_login": "Log Masuk",
            "already_have_account": "Sudah mempunyai akaun?",

            // Form Register 2
            "register_title_2": "Lengkapkan Profil Anda",
            "signup2_subtitle": "Sila tetapkan kata laluan anda untuk melengkapkan pendaftaran keahlian.",
            "placeholder_pwd": "Kata Laluan",
            "placeholder_confirm_pwd": "Sahkan Kata Laluan",
            "btn_complete": "Lengkapkan Pendaftaran",
            "btn_back": "Kembali",
            "toast_mismatch": "Kata laluan tidak sepadan",
            "toast_success": "🎉 Pendaftaran berjaya!",
            "toast_failed": "❌ Pendaftaran gagal.",
            "toast_missing": "Maklumat pendaftaran tidak lengkap.",

            // Login Page
            "login_title": "Kembali ke Warisan",
            "login_subtitle": "Melangkah kembali ke dalam naungan khazanah negara. Perjuangan anda dalam memelihara sejarah hidup kita bermula di sini.",
            "btn_login": "Log Masuk ke Arkib",
            "forgot_password": "Hilang arah? Tetap semula kata laluan",
            'logout':'Log Keluar',

            // Dashboard Categories
            "categories": {
                "all": "Semua",
                "architecture": "Seni Bina",
                "restoration": "Pemulihan",
                "history": "Sejarah",
                "culture": "Budaya",
                "archaeology": "Arkeologi"
            },

            // Media Labels
            "media_labels": {
                "video": "Video",
                "image": "Imej",
                "document": "Dokumen"
            },

            'stats_label': {
                'views': 'Tontonan',
                'likes': 'Suka',
                'shares': 'Kongsi',
                'downloads': 'Muat Turun',
            },

            // Heritage Item Content
            "heritage": {
                "h1": {
                    "title": "Rahsia Rumah Penghulu Abu Seman",
                    "description": "Eksplorasi seni bina tradisional Melayu."
                },
                "h2": {
                    "title": "Garis Panduan Pemuliharaan 2024",
                    "description": "Garis panduan rasmi untuk projek pemulihan."
                },
                "h3": {
                    "title": "Fotografi Nadir: KL pada Tahun 1950-an",
                    "description": "Masa lalu Kuala Lumpur melalui fotografi."
                },
                "h4": {
                    "title": "Kraf Tradisional Malaysia",
                    "description": "Tinjauan mendalam tentang kraf dan tukang tradisional Malaysia."
                },
                "h5": {
                    "title": "Program Pendidikan di Rumah Penghulu Abu Seman",
                    "description": "Melihat inisiatif pendidikan di tapak warisan."
                }
            },

            // Search Placeholder
            "search_placeholder": "Cari",

            // buy button
            'unlock_content': "Buka Akses Penuh",

            // load more
            'load_more': "Muat Lagi",

            // shopping cart
            'shopping_cart': "KARUNG BELANJA",

            // checkout
            'checkout': "Semak Keluar",
            'total': "Jumlah",
            'pay_now': "Bayar Sekarang",
            'total_payment': "Jumlah Bayaran",
            'select_payment_method': 'Pilih Kaedah Bayaran',
            'select': 'Pilih',

            // label
            'fpx': 'FPX (Perbankan Dalam Talian)',
            'card': 'Kad',
            'ewallet': 'E-Dompet',

            'error': {
                //error code
                "404": {
                    title: "404",
                    message: "Maaf, halaman yang anda cari tidak dijumpai.",
                    color: "#4c7c14"
                },
                "403": {
                    title: "403",
                    message: "Akses disekat. Anda tidak mempunyai kebenaran untuk mengakses fail ini",
                    color: "#d32f2f" // Red for errors
                },
                "500": {
                    title: "500",
                    message: "Ralat pelayan dalaman. Masalah teknikal telah berlaku di pihak kami",
                    color: "#1976d2" // Blue for server info
                }
            },

            'btn_back_to_dashboard': 'Kembali ke Laman Utama',

            // profile
            'personal_details':'Butiran Peribadi',
            'save': 'Simpan',
            'edit': 'Edit',
            'member_label': 'Ahli',
            'staff_label': 'Staf'
        },

    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    });

export default i18n;