import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const categories = ["Architecture", "Restoration", "History", "Culture", "Archaeology"];
const types = ["video", "document", "image"];
const channels = ["BWM Archive", "National Museum", "Heritage TV", "History Channel MY"];

const generateItems = (count) => {
    // Starting with your original 3 manual entries
    const baseItems = [
        {
            "id": "h1",
            "type": "video",
            "category": "Architecture",
            "thumbnail": "https://badanwarisanmalaysia.org/wp-content/uploads/2022/12/beige-minimalist-photo-collage.png?w=1024",
            "fileSource": "/Resources/bwm-video-ex.mp4",
            "themeColor": "139, 69, 19",
            "label": "Video",
            "title": "The Secrets of Rumah Penghulu Abu Seman",
            "channel": "BWM Heritage",
            "views": "24K views",
            "timestamp": "3 months ago",
            "description": "An exploration of traditional Malay architecture."
        },
        {
            "id": "h2",
            "type": "document",
            "category": "Restoration",
            "thumbnail": "https://badanwarisanmalaysia.org/wp-content/uploads/2015/01/no-2-jalan-stonordev-of-no-2badan-warisan-malaysia-for-senibahri-architectphotos-by-arthur-teng.jpg?w=840",
            "fileSource": "/Resources/bwm-pdf-ex.pdf",
            "themeColor": "211, 47, 47",
            "label": "PDF",
            "title": "Conservation Guidelines 2024",
            "channel": "BWM Archive",
            "views": "1.2K downloads",
            "timestamp": "1 week ago",
            "description": "Official guidelines for restoration projects."
        },
        {
            "id": "h3",
            "type": "image",
            "category": "History",
            "thumbnail": "https://badanwarisanmalaysia.org/wp-content/uploads/2023/10/bwm-heritage-centre_.jpeg?w=1024",
            "fileSource": "https://badanwarisanmalaysia.org/wp-content/uploads/2023/10/bwm-heritage-centre_.jpeg?w=1024",
            "themeColor": "25, 118, 210",
            "label": "Image",
            "title": "Rare Photography: KL in the 1950s",
            "channel": "Fuad Arashad",
            "views": "5K views",
            "timestamp": "5 days ago",
            "description": "Kuala Lumpur's past through photography."
        }
    ];

    const generated = Array.from({ length: count }, (_, i) => {
        const id = `h${i + 4}`;
        const type = types[Math.floor(Math.random() * types.length)];
        const category = categories[Math.floor(Math.random() * categories.length)];

        let themeColor = "46, 125, 50"; // Video Green
        if (type === "document") themeColor = "211, 47, 47"; // Doc Red
        if (type === "image") themeColor = "25, 118, 210"; // Image Blue

        return {
            id,
            type,
            category,
            thumbnail: `https://picsum.photos/seed/${id}/800/450`,
            fileSource: type === "document" ? "/Resources/bwm-pdf-ex.pdf" : (type === "video" ? "/Resources/bwm-video-ex.mp4" : `https://picsum.photos/seed/${id}/800/450`),
            themeColor,
            label: type.charAt(0).toUpperCase() + type.slice(1),
            title: `${category} Discovery Study #${id}`,
            channel: channels[Math.floor(Math.random() * channels.length)],
            views: `${Math.floor(Math.random() * 50)}K views`,
            timestamp: `${Math.floor(Math.random() * 11) + 1} months ago`,
            description: `A detailed ${type} regarding the historical impact of ${category}.`
        };
    });

    return [...baseItems, ...generated];
};

const fullData = generateItems(20);
const outputPath = join(__dirname, 'dummy_data.json');

fs.writeFileSync(outputPath, JSON.stringify(fullData, null, 2), 'utf-8');
console.log(`✅ Success! dummy_data.json created in ${outputPath}`);