const list_view=()=>{
    const list_view= document.querySelector('.navigation');
    list_view.style="display:block;";
}
const list_view_none=()=>{
    const list_view= document.querySelector('.navigation');
    list_view.style="display:none;";
}
const main_box=document.getElementById('main-box');
const create_parent_box=document.createElement('div')

const video_url=[
    /* songs */
    '../video/Konjam Video Song __ M.S.Dhoni - Tamil __ Sushant Singh Rajput_ Kiara Advani(1080P_HD).mp4',
    '../video/Mudhal Nee Mudivum Nee - Title Track Video _ Darbuka Siva _ Sid Sriram _ Thamarai(1080P_HD).mp4',
    '../video/mulumathy avalathu _ jodha akbar _ 1080p 60fps blueray tamil video song _(720P_60FPS).mp4',
    '../video/Nira Video Song (Extended Version) _ Takkar (Tamil) _ Siddharth _ Karthik G Krish _ Nivas K Prasanna(1080P_HD).mp4',
    '../video/Railin Oligal _ Blue Star _ Ashok Selvan_ Keerthi _ Govind Vasantha _ S.Jaya Kumar _ Pa.Ranjith(1080P_HD).mp4',
    '../video/Yaaradi Nee Mohini - Venmegam Video _ Dhanush _ Yuvanshankar Raja(1080P_HD).mp4',
    '../video/Thalaivaa - Yaar Indha Saalai Oram Video _ Vijay_ Amala Paul(1080P_HD).mp4',
    /* movie-scene */
    '../video/Epic Scenes of Rajkiran_ _ Sandakozhi _ Vishal _ Lal _ Free On Sun NXT _ 30th Aug - 01st Sep(720P_HD).mp4',
    '../video/Life lessons ft. Pichaikkaran _ Vijay Antony _ Watch this Sunday at 3.00 PM _ Sun TV(720P_HD).mp4',
    '../video/Vasool Raja MBBS - Back to Back Comedy Scenes _ Kamal Haasan _ Prabhu _ Prakash Raj _ Sun NXT(720P_HD).mp4',
    '../video/ஏன்டா கனவா இருந்தாலும் ஒரு நியாயம் வேணாமா டா...._ _ Kovil Comedy Scenes _ Silambarasan _ Vadivelu(720P_HD).mp4',
    '../video/ஒரு Creator-னு மரியாதை கூட இல்ல..😂 _ Uthama Puthiran Movie Scene _ Dhanush _ Genelia _ Vivek(720P_HD).mp4',
    '../video/',
    /* education */
    '../video/How to become a full stack developer 🚀 _ Web Development Explained _ Error Makes Clever Academy(1080P_HD).mp4',
    '../video/How to use LinkedIN effectively _ Supreme guide for Beginners_ in tamil _programming _linkedin(720P_60FPS).mp4',
    '../video/I Asked Googlers How To Get Hired(1080P_HD).mp4',
    '../video/ROADMAP to becoming a Data Analyst in 2024(1080P_HD).mp4',
    '../video/The Complete Web Development Roadmap [2024](1080P_HD).mp4',
    '../video/Best Laptop For Coding In 2024 _ தமிழில்(1080P_HD).mp4',
    '../video/The Complete Web Development Roadmap [2024](1080P_HD).mp4'
];

const forloop = (start, stop)=>{
    for(i=start;i<=stop;i++){
        const create_content_box= document.createElement('div');
        create_content_box.className='content';

        const create_video=document.createElement('video')
        create_video.src=video_url[i];
        create_video.controls=true;

        create_content_box.appendChild(create_video);
        create_parent_box.append(create_content_box);
        create_parent_box.className='content-box';
    }
}
const education_upload=()=>{ 
    const remove_div=document.querySelector('.content-box');  
    remove_div.remove();
    forloop(11,video_url.length-1);
    main_box.appendChild(create_parent_box);
    main_box.className='created-main';
}
const songs_upload=()=>{
    const remove_div=document.querySelector('.content-box');  
    remove_div.remove();
    forloop(0,6);
    main_box.appendChild(create_parent_box);
    main_box.className='created-main';
}
const scene_upload=()=>{
    const remove_div=document.querySelector('.content-box');  
    remove_div.remove();
    forloop(7,11);
    main_box.appendChild(create_parent_box);
    main_box.className='created-main';
}