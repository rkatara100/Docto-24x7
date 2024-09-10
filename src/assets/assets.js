import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import logom from './logo-DOCTO 24x7.svg';
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    logom
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Richard James is dedicated to offering patient-centered care, emphasizing prevention, early detection, and treatment of diseases. He believes in building strong relationships with his patients to ensure the best possible outcomes and long-term health. His approach includes a thorough understanding of patient history, lifestyle, and personalized care plans.',
        fees: 50,
        address: {
            line1: '123 Main St.',
            line2: 'Central London, UK'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS & MD',
        experience: '3 Years',
        about: 'Dr. Emily Larson is committed to providing comprehensive gynecological care with a focus on women\'s health and wellness. She specializes in minimally invasive surgery, prenatal care, and hormonal therapies. Dr. Larson is passionate about educating her patients on reproductive health and helping them make informed decisions.',
        fees: 60,
        address: {
            line1: '456 Elm St.',
            line2: 'West End, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Sarah Patel specializes in skin care and treatment of various dermatological conditions, including acne, eczema, and psoriasis. She focuses on both medical and cosmetic dermatology, offering procedures such as laser therapy and chemical peels. Dr. Patel is dedicated to staying updated with the latest advancements in skin treatments to provide the best care to her patients.',
        fees: 30,
        address: {
            line1: '789 Oak St.',
            line2: 'East Side, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Christopher Lee is a pediatrician who offers compassionate care for children of all ages, from infants to adolescents. He emphasizes preventive health care, vaccination, and the management of chronic conditions like asthma and allergies. Dr. Lee is also known for his child-friendly approach, making medical visits comfortable and informative for both children and their parents.',
        fees: 40,
        address: {
            line1: '101 Maple St.',
            line2: 'North End, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Jennifer Garcia is an experienced neurologist specializing in diagnosing and treating disorders of the nervous system. Her expertise includes handling cases of epilepsy, multiple sclerosis, and migraines. Dr. Garcia is dedicated to providing her patients with individualized care and the latest in neurological treatments.',
        fees: 50,
        address: {
            line1: '234 Birch St.',
            line2: 'South Kensington, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Andrew Williams focuses on neurological care, with a special interest in stroke management, Parkinson’s disease, and neuropathy. He combines a thorough understanding of neurological disorders with a compassionate approach to patient care. His methods include both traditional and innovative treatments tailored to each patient’s needs.',
        fees: 50,
        address: {
            line1: '567 Pine St.',
            line2: 'Bloomsbury, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Christopher Davis is known for his holistic approach to healthcare, focusing on the prevention, early diagnosis, and effective management of diseases. He has extensive experience in treating chronic conditions such as hypertension and diabetes and is dedicated to promoting healthy lifestyles.',
        fees: 50,
        address: {
            line1: '678 Cedar St.',
            line2: 'Holborn, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Timothy White has a profound interest in reproductive endocrinology and infertility treatments. He is committed to helping women through all stages of life, from puberty to menopause. Dr. White employs both modern and traditional methods to ensure patient comfort and effective care.',
        fees: 60,
        address: {
            line1: '789 Walnut St.',
            line2: 'Mayfair, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Ava Mitchell is a dermatologist with expertise in treating various skin conditions, as well as performing aesthetic procedures such as Botox and fillers. Her patient-focused approach ensures a tailored skincare regimen that suits each individual\'s needs and lifestyle.',
        fees: 30,
        address: {
            line1: '890 Chestnut St.',
            line2: 'Chelsea, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Jeffrey King specializes in the care of newborns, children, and adolescents. He has a keen interest in childhood nutrition, growth monitoring, and developmental assessments. Dr. King is dedicated to providing family-centered care, ensuring all concerns are addressed in a friendly and professional manner.',
        fees: 40,
        address: {
            line1: '901 Spruce St.',
            line2: 'Notting Hill, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Zoe Kelly is skilled in treating complex neurological disorders, including epilepsy, dementia, and neuropathic pain. She believes in a multidisciplinary approach to patient care, working closely with other specialists to provide comprehensive treatment plans.',
        fees: 50,
        address: {
            line1: '123 Fir St.',
            line2: 'Greenwich, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Patrick Harris is a neurologist who specializes in neurorehabilitation and neurocritical care. He is committed to advancing his field through both research and clinical practice, ensuring his patients receive the latest in medical care.',
        fees: 50,
        address: {
            line1: '234 Willow St.',
            line2: 'Hampstead, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Chloe Evans focuses on preventive medicine and patient education. Her approach involves thorough consultations and diagnostics to provide effective treatments. She is dedicated to patient well-being and enhancing their quality of life through comprehensive care.',
        fees: 50,
        address: {
            line1: '345 Ash St.',
            line2: 'Covent Garden, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ryan Martinez is dedicated to women\'s health, particularly in areas of reproductive health, obstetrics, and prenatal care. He is known for his gentle approach and for creating a supportive environment where patients feel comfortable discussing their health concerns.',
        fees: 60,
        address: {
            line1: '456 Beech St.',
            line2: 'Camden, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Amelia Hill specializes in treating skin diseases and offers a range of aesthetic treatments to help patients look and feel their best. She emphasizes patient education and follows a comprehensive approach to skincare and cosmetic procedures.',
        fees: 30,
        address: {
            line1: '567 Palm St.',
            line2: 'Islington, London'
        }
    }
];
