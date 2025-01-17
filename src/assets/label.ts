export const LABELS = {
    navbar: {
        TITLE: 'Hardika Jadhav',
        NAVITEMS: ['Home', 'Experience', 'Projects', 'Skills', 'Contact'],
        // MOBILENAVITEMS: [
        //     {
        //         label: 'Home',
        //         icon: 'pi pi-home'
        //     },
        //     {
        //         label: 'Projects',
        //         icon: 'pi pi-briefcase'
        //     },
        //     {
        //         label: 'Experience',
        //         icon: 'pi pi-book'
        //     },
        //     {
        //         label: 'Skills',
        //         icon: 'pi pi-sliders-h'
        //     },
        //     {
        //         label: 'Resume',
        //         icon: 'pi pi-paperclip'
        //     },
        //     {
        //         label: 'Contact',
        //         icon: 'pi pi-comments'
        //     }
        // ],
        MODALTITLE: 'Send a Message',
    },
    home: {
        START: "Hello, I'm",
        NAME: 'Hardika Jadhav',
        ROLE: 'Angular Developer',
        INTRO: "An innovative, purpose-driven engineer contributed my learning into building web applications & solutions for enterprises.Seeking to work in a professional ambiance that provides a space to contribute my skills towards the growth of the organization.",
        GETINTOUCH: "Contact Info",
        BROWSEPROJECTS: "Browse Projects",
        IMAGESRC: "../../assets/images/1.jpg",
        MODALTITLE: 'Send a Message',
    },
    projects: {
        TITLE: 'Projects',
        WEATHERSRC: '../../assets/images/weather.png',
        WEATHERTITLE: 'Weather App',
        WEATHERINFO: 'A weather app made using Angular 15, With real time data from Rapid Api.',
        SPOTIFYSRC: '../../assets/images/dash.png',
        SPOTIFYTITLE: 'Spotify Clone',
        SPOTIFYINFO: 'A Spotify Clone made using Angular 17, With real time data from Spotify Developers Api.'
    },
    contact: {
        FORM: [
            { type: 'Firstname', icon: 'pi pi-user' },
            { type: 'Lastname', icon: 'pi pi-user' },
            { type: 'Email', icon: 'pi pi-envelope' },
            { type: 'Phone', icon: 'pi pi-phone' }
        ],
        ERRORMESSAGE: {
            REQUIRED: 'is Required.',
            PATTERN: 'Please enter valid '
        },
        EMAILJS: {
            SERVICEID: 'gmail',
            TEMPLATEID: 'Angular',
            PUBLICKEY: 'RX7rbtF1GnQqra-_G'
        }
    },
    toast: {
        SUCCESS: {
            'severity': 'success',
            'summary': 'Success',
            'detail': 'Email Sent'
        },
        FAILURE: {
            'severity': 'error',
            'summary': 'Error',
            'detail': 'Error'
        }
    },
    experience: {
        ACCORDIAN: [
            {
                company: 'Capgemini',
                url: 'assets/images/CAP.PA_BIG.png',
                title: ['Designation : ', 'Skills : ', 'Experience : '],
                content: {
                    designation: 'Senior Software Engineer',
                    skills: ['Angular', ' Spring Boot', ' React', ' Angular Unit Testing', ' Git & Github', ' Jira'],
                    experience: '3 yrs 3 mos',

                }
            }
        ]
    },
    skills: {
        SKILLSLIST1: [
            { title: 'Angular', imageUrl: 'assets/images/programing.png', class: 'angular', experience: '3 yrs', value: [{ label: '', value: 80, color: '#673ab7' }] },
            { title: 'Html', imageUrl: 'assets/images/html-5.png', class: 'html', experience: '3 yrs', value: [{ label: '', value: 80, color: '#673ab7' }] },
            { title: 'Css', imageUrl: 'assets/images/css-3.png', class: 'css', experience: '3 yrs', value: [{ label: '', value: 80, color: '#673ab7' }] },
            { title: 'Javascript', imageUrl: 'assets/images/js.png', class: 'js', experience: '3yrs', value: [{ label: '', value: 80, color: '#673ab7' }] },
             { title: 'Bitbucket', imageUrl: 'assets/images/bitbucket.png', class: 'bitbucket', experience: '4 mon', value: [{ label: '', value: 50, color: '#673ab7' }] },
        ],
        SKILLSLIST2: [
            { title: 'Java', imageUrl: 'assests/images/java.png', class: 'java', experience: 'Trained', value: [{ label: '', value: 60, color: '#673ab7' }] },
            { title: 'Spring Boot', imageUrl: 'assets/images/spring.png', class: 'spring', experience: 'Trained', value: [{ label: '', value: 60, color: '#673ab7' }] }
        ],
        SKILLSLIST3: [
            { title: 'Git/Github', imageUrl: 'assets/images/git.png', class: 'git', experience: '3yrs', value: [{ label: '', value: 70, color: '#673ab7' }] },
            { title: 'Jira', imageUrl: 'assets/images/jira.png', class: 'jira', experience: '3yrs', value: [{ label: '', value: 70, color: '#673ab7' }] }
        ]
    }
}