import React from "react";
import BlogPost from "./BlogPost";
import BookSug from "../Forms/BookSug";
import AltBlog from "./AltBlog";
// ARTIST
import GrandPlace1a from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/grandPlace1a.jpg";
import GrandPlace2a from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/grandPlace2a.jpg";
import GrandPlace3b from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/grandPlace3b.jpg";
import Parccitadelle from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/IMG_0575.jpg";
import Selfat17 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/IMG_0686.jpeg";
import Eyes1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/IMG_0896.jpg";
import LillyTobes from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/IMG_20362.jpg";
import LillyLa from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/IMG_20372.jpg";
import Eyes2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/IMG_2085.jpg";
import Sfcapitol1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/IMG_2736.jpg";
import Sfcapitol2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/IMG_2748.jpg";
import SetUp from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/IMG_4592.jpg";
// import ZackLips from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/IMG_9887.jpg";
import ZackLips from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/IMG_98912.jpg";
import Quadship from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/rach-whitebkgd-1.png";
import Tigerking from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/tigerking-.jpg";
import Sandias from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/RPReplay_Final1586719710.mov";

// NOMAD
    // Amsterdam
import Amsterdam1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Amsterdam/amsterdam.jpg";
    // Barcelona
import Pallela from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Barcelona/2DA23858-B5ED-4AA9-AF71-18B6B719AE98.jpeg";
import Sagradafamilia1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Barcelona/1515FE08-6EB5-4B97-8F26-65573AC6EE70.jpeg";
import Sagradafamilia2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Barcelona/9895CA03-7118-47BB-9B14-4C330B3C88D7.jpeg";
import BarcelonaBeach1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Barcelona/E306A619-3C09-4135-A14D-3E98098EEC8A.jpeg";
import Cheers1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Barcelona/IMG_0059.mp4";
    // BERLIN
import JewishMem1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Berlin/0F92E26B-0246-4384-AC91-B4D0D0173DE2.jpeg";
import Arch1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Berlin/1D3655A0-C5E5-464D-BEDA-FA6F5BEB1627.jpeg";
import MuseumBridge from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Berlin/5A7181F7-7AD9-40F6-94C5-BE9635AED098.jpeg";
import Prost from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Berlin/38C3A6E1-1D71-4036-BCC1-BEE3702130ED.mov";
import Parliament1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Berlin/62F9C48F-1591-4EA5-A792-722C18569895.jpeg";
import Museum from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Berlin/berlin-1.jpg";
import Arch2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Berlin/berlin-2.jpg";
import Parliament2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Berlin/EB4F071A-D75A-4EEE-8CDF-CC5D23D6EACC.jpeg";
import HorseMuseum from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Berlin/EFC8D984-692F-476D-8CD5-EB13967424E8.jpeg";
    // BRUSSELS
import Brussels1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Brussels/26EF7221-5055-4CCB-BF98-1F4C5C410A37.jpeg";
import Brussels2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Brussels/34B0C0D4-D364-49A3-94A9-D93F25AD01A9.jpeg";
    // BUDAPEST
import Boat1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Budapest/1E54D64E-8F8F-4901-80F4-C3BA9C6EDA64.mov";
import Kaneyudo1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Budapest/8C638F79-674D-416E-823D-4FB39C004F06.jpeg";
import Shoes from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Budapest/A4AC3FE0-A817-41E5-A40B-468C3D4AC5B2.jpeg";
import Pubbaths from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Budapest/A28B0423-52C3-4B6D-A8D7-45D7A9BD594D.jpeg";
import Kaneyudo2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Budapest/E90BFE88-9094-489A-86A6-95854AFA46DF.jpeg";
import Cityview from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Budapest/F9067A67-FF45-485B-B3DE-BE8502CE011E.jpeg";
import Budabridge from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Budapest/FFE74BD5-9CC2-4123-B35B-3B44B8F53943.jpeg";
    // FUERTE VENTURA
import Scuba from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Fuerte_Ventura/6E5EA469-2F6D-4261-AC3E-C4CD992F63CA.jpg";
import Playa from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Fuerte_Ventura/570F24B0-C7F0-4A5F-AE42-B0DA7A41786C.jpg";
    // Athens
import AthensKanes1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Greece/87FE5BE0-51BB-4072-B074-AF3755578BB0.jpeg";
import AthensKanes2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Greece/347C6BA8-AEC0-4AC5-AF1C-5FC21DA45F97.jpeg";
import AthensRuins1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Greece/959BDE33-4ABA-4D9F-B64E-2CF974C31F46.jpeg";
import AthensRuins2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Greece/C20AF707-E2B6-494F-8797-9D31BD76310B.jpeg";
import AthensHike from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Greece/CDDC292C-6393-4ED9-BB89-BF97F6B9C6B4.jpeg";
import AthensKanes3 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Greece/CF27C43C-BAE9-4D87-94FB-44ED422812AE.jpeg";
import AirbnbView from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Greece/FDAE300B-67EF-43C7-BA9B-722FA8E75405.jpeg";
    // Lyon
import LyonRuins from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Lyon/IMG_0495.jpg";
import LyonStadium from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/IMG_0539.jpg";
    // Montpelier
import MontpelierArch from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Montpelier/2FABFC69-378D-4588-952A-01B06D49619F.jpeg";
import WineTasting1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Montpelier/3A5FF87E-B327-4C3F-ACD5-E72FF670D6EC.jpeg";
import Luistepmei from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Montpelier/03F4C4AC-FFA6-479C-8246-5C92D10A11C1.jpeg";
import MontPlage1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Montpelier/44D93429-2F93-49AE-AA4D-0FAF19F304DC.jpeg";
import MontPlage2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Montpelier/72B58668-D8B3-4C07-A3F5-CD19488CEB63.jpeg";
import WineTasting2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Montpelier/2680508E-1E18-444D-87AB-96347C53031B.jpeg";
import Vineyard from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Montpelier/4689821B-AAFD-48C0-84C1-90B774DFC934.jpeg";
import Bests from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Montpelier/montpelier-1.jpg";
    // Paris
import TourEiffel1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/4DE64B29-E75C-4A7E-9942-0930121C38D1.jpeg";
import ArchDeTriomphe1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/5F243572-2AE9-4468-8E83-0BCF6F2D5800.jpeg";
import Parthenon1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/9FD8102C-BEDB-4A86-ABD9-A213B69A73C4.jpeg";
import Parthenon2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/20A0BA91-C821-41B0-9D1B-34C81F8BF803.jpeg";
import TourEiffel2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/36B32ED8-03B3-4BF1-9EA7-91853044C965.jpeg";
import NotreDame1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/63A0EC2E-7B7D-4D11-B828-307F0432A78A.jpeg";
import SacreCoeur1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/63B44A49-2C19-4CF2-842B-B6C5B8AA5E3D.jpeg";
import LeSein from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/865D34B0-217F-42DB-BBB5-A2432D3F767F.jpeg";
import Versailles1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/1666E192-8426-467E-9CCC-316E8754DA24.jpeg";
import SacreCoeur2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/40859906-C5A5-4FFC-8CAC-B3184D94EFCC.jpeg";
import ArchDeTriomphe2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/A13466EA-339F-4FF5-967C-8C60B2E434D2.jpeg";
import NotreDame2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/AAB22280-CB6A-4FC3-9E81-B691A88A2AC5.jpeg";
import TourEiffel3 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/CD3EA610-E2D7-4AD6-9D67-9D5680C079B9.jpeg";
import ShakespeareCompany from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/D46FAE12-DDDC-4D74-8D12-F6BBC58E0D9A.jpeg";
import LaDefense from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/D372C422-9DB2-471B-B221-4702EEF89CA6.mov";
import Boat2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/DAF2CDA4-53DC-4164-B3F5-A4C4100FA3F8.jpeg";
import Versailles2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/F4267D37-5E0B-4F6A-A4CF-70643B13CB41.jpeg";
import TourEiffel4 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Paris/toud-d'eiffel.jpg";
import Philly from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Philadelphia/IMG_0218.jpg";
// import Tchin from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/7DFAF0B2-4ABC-46B7-9621-AF00C2BDC6E8.mov";


// FEMINIST
import Wwc2019 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Lyon/EDBBA996-8CB3-403E-8CCA-69CC5023720E.jpeg"
import Lizmoco from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Artist/pouty-mo-court-liz.png";
import FemPow from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Feminist/927E4EA0-BD69-4127-98BC-76E9A1831F9B.jpg";
import SwarlesTerasse from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Feminist/IMG_0686.jpg"
import BLM1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Feminist/IMG_1169.jpg"
import GiletJaune from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Feminist/IMG_2333.jpg"
import PinkBra from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Feminist/IMG_2564.jpg"
import SwarelesSheets from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Feminist/IMG_4492.jpg"
import SwarlesWindow from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Feminist/IMG_5492.jpg"
import NiUnaMas1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Feminist/IMG_8288.jpg"
import NiUnaMas2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Feminist/IMG_8323.jpg"

// MUSIC
// import Record from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/music/C7D18140-BCBA-4A5B-9F8B-527AF30EC8D1.MOV"
import MeiKeys from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/music/57444957828__79E8799D-3A55-477C-85F8-C125D8E4BC9C.jpg"
import MeiKeys2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/music/IMG_0353.jpg"
import GuitarLille1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/music/IMG_2443.jpg"
import GuitarLille2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/music/IMG_2720.jpg"
import Mosaic1 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/music/IMG_2920.jpg"
import Recording from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/music/IMG_3980.jpg"

// TECH
import SwarlesTech from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Feminist/IMG_9394.jpg"
import Recording2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Tech/IMG_0957.jpg"
import SwarlesComp from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Tech/IMG_7232.jpg"

// WRITING
import WritingBeer from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Writing/IMG_8281.jpg"

// ATHLETE
import BikeLynne from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Athlete/F387E892-3527-4CBB-A840-CD9D2756CAFF.jpg"
import Ropes from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Athlete/20200312_130027_Original.jpg";
import Scuba2 from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Athlete/E512D5C0-D20D-48C4-B51E-DF35EEBEE2822.jpg";
import ShootingPool from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Athlete/IMG_0184.jpg";
import LilleRun from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Athlete/IMG_0309.jpg";
import FirstBballTeam from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Athlete/IMG_6253.jpg";
import AmsterdamBike from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Athlete/IMG_7435.jpg";
import Snowboarding from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Athlete/IMG_9790.jpg";

// READING
import ShakespeareCoMoco from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Reading/IMG_0054.jpg"
import ReadFrench from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Reading/IMG_1058.jpg"
import NewYearsBook from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/Reading/IMG_2759.jpg"
// import  from "../ResourcesProjects/UploadPhotosToWeb/blog/altImages/"

const BlogLists = () => {
    let props = props.props

    const ArtistArray = [{otherBlog: true, images:[{source: GrandPlace1a, imgLabel: "", imgDesc: ""}, {source: GrandPlace2a, imgLabel: "", imgDesc: ""}, {source: GrandPlace3b, imgLabel: "", imgDesc: ""}, {source: Parccitadelle, imgLabel: "", imgDesc: ""}, {source: Selfat17, imgLabel: "", imgDesc: ""}, {source: Eyes1, imgLabel: "", imgDesc: ""}, {source: LillyTobes, imgLabel: "", imgDesc: ""}, {source: LillyLa, imgLabel: "", imgDesc: ""}, {source: Eyes2, imgLabel: "", imgDesc: ""}, {source: Sfcapitol1, imgLabel: "", imgDesc: ""}, {source: Sfcapitol2, imgLabel: "", imgDesc: ""}, {source: SetUp, imgLabel: "", imgDesc: ""}, {source: ZackLips, imgLabel: "", imgDesc: ""}, {source: Quadship, imgLabel: "", imgDesc: ""}, {source: Tigerking, imgLabel: "", imgDesc: ""},], form: "", props:{props} }]


    const MusicianArray = [{otherBlog: true, images:[ {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}], form: "", props:{props} }]

    const SoftwareEngineerArray = [{otherBlog: true, images:[ {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}], form: "", props:{props} }]

    const WriterArray = [{otherBlog: true, 
        images:[ {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}, {source: "", imgLabel: "", imgDesc: ""}], form: "", props:{props} }]
    // MOVIES
        //  {source: Cheers1, imgLabel: "", imgDesc: ""},
        //  {source: Prost, imgLabel: "", imgDesc: ""},
        //  {source: Boat1, imgLabel: "", imgDesc: ""},
        //  {source: LaDefense, imgLabel: "", imgDesc: ""},
        //  {source: Tchin, imgLabel: "", imgDesc: ""},

    const NomadArray = [{otherBlog: true, images: [{source: Amsterdam1, imgLabel: "", imgDesc: ""}, {source: Pallela, imgLabel: "", imgDesc: ""}, {source: Sagradafamilia1, imgLabel: "", imgDesc: ""}, {source: Sagradafamilia2, imgLabel: "", imgDesc: ""}, {source: BarcelonaBeach1, imgLabel: "", imgDesc: ""}, {source: JewishMem1, imgLabel: "", imgDesc: ""}, {source: Arch1, imgLabel: "", imgDesc: ""}, {source: MuseumBridge, imgLabel: "", imgDesc: ""}, {source: Parliament1, imgLabel: "", imgDesc: ""}, {source: Museum, imgLabel: "", imgDesc: ""}, {source: Arch2, imgLabel: "", imgDesc: ""}, {source: Parliament2, imgLabel: "", imgDesc: ""}, {source: HorseMuseum, imgLabel: "", imgDesc: ""}, {source: Brussels1, imgLabel: "", imgDesc: ""}, {source: Brussels2, imgLabel: "", imgDesc: ""}, {source: Kaneyudo1, imgLabel: "", imgDesc: ""}, {source: Shoes, imgLabel: "", imgDesc: ""}, {source: Pubbaths, imgLabel: "", imgDesc: ""}, {source: Kaneyudo2, imgLabel: "", imgDesc: ""}, {source: Cityview, imgLabel: "", imgDesc: ""}, {source: Budabridge, imgLabel: "", imgDesc: ""}, {source: Scuba, imgLabel: "", imgDesc: ""}, {source: Playa, imgLabel: "", imgDesc: ""}, {source: AthensKanes1, imgLabel: "", imgDesc: ""}, {source: AthensKanes2, imgLabel: "", imgDesc: ""}, {source: AthensRuins1, imgLabel: "", imgDesc: ""}, {source: AthensRuins1, imgLabel: "", imgDesc: ""}, {source: AthensHike, imgLabel: "", imgDesc: ""}, {source: AthensKanes3, imgLabel: "", imgDesc: ""}, {source: AirbnbView, imgLabel: "", imgDesc: ""}, {source: LyonRuins, imgLabel: "", imgDesc: ""}, {source: LyonStadium, imgLabel: "", imgDesc: ""}, {source: MontpelierArch, imgLabel: "", imgDesc: ""}, {source: WineTasting1, imgLabel: "", imgDesc: ""}, {source: Luistepmei, imgLabel: "", imgDesc: ""}, {source: MontPlage1, imgLabel: "", imgDesc: ""}, {source: MontPlage2, imgLabel: "", imgDesc: ""}, {source: WineTasting2, imgLabel: "", imgDesc: ""}, {source: Vineyard, imgLabel: "", imgDesc: ""}, {source: Bests, imgLabel: "", imgDesc: ""}, {source: TourEiffel1, imgLabel: "", imgDesc: ""}, {source: ArchDeTriomphe1, imgLabel: "", imgDesc: ""}, {source: Parthenon1, imgLabel: "", imgDesc: ""}, {source: Parthenon2, imgLabel: "", imgDesc: ""}, {source: TourEiffel2, imgLabel: "", imgDesc: ""}, {source: NotreDame1, imgLabel: "", imgDesc: ""}, {source: SacreCoeur1, imgLabel: "", imgDesc: ""}, {source: LeSein, imgLabel: "", imgDesc: ""}, {source: Versailles1, imgLabel: "", imgDesc: ""}, {source: SacreCoeur2, imgLabel: "", imgDesc: ""}, {source: ArchDeTriomphe2, imgLabel: "", imgDesc: ""}, {source: NotreDame2, imgLabel: "", imgDesc: ""}, {source: TourEiffel3, imgLabel: "", imgDesc: ""}, {source: ShakespeareCompany, imgLabel: "", imgDesc: ""}, {source: Boat2, imgLabel: "", imgDesc: ""}, {source: Versailles2, imgLabel: "", imgDesc: ""}, {source: TourEiffel4, imgLabel: "", imgDesc: ""}, {source: Philly, imgLabel: "", imgDesc: ""}], form: "", props:{props} }]



    const FeministArray = [{otherBlog: true, images:[
    {source: Wwc2019, imgLabel: "", imgDesc: ""},
    {source: Lizmoco, imgLabel: "", imgDesc: ""},
    {source: FemPow, imgLabel: "", imgDesc: ""},
    {source: SwarlesTerasse, imgLabel: "", imgDesc: ""},
    {source: BLM1, imgLabel: "", imgDesc: ""},
    {source: GiletJaune, imgLabel: "", imgDesc: ""},
    {source: PinkBra, imgLabel: "", imgDesc: ""},
    {source: SwarelesSheets, imgLabel: "", imgDesc: ""},
    {source: SwarlesWindow, imgLabel: "", imgDesc: ""},
    {source: NiUnaMas1, imgLabel: "", imgDesc: ""},
    {source: NiUnaMas2, imgLabel: "", imgDesc: ""}], form: "", props:{props} }]

    const WomanInTechArray = [{otherBlog: true, images:[
    {source: SwarlesTech, imgLabel: "", imgDesc: ""},
    {source: Recording2, imgLabel: "", imgDesc: ""},
    {source: SwarlesComp, imgLabel: "", imgDesc: ""},], form: "", props:{props} }]

    const MusicArray = [{otherBlog: true, images:[
    {source: MeiKeys, imgLabel: "", imgDesc: ""},
    {source: MeiKeys2, imgLabel: "", imgDesc: ""},
    {source: GuitarLille1, imgLabel: "", imgDesc: ""},
    {source: GuitarLille2, imgLabel: "", imgDesc: ""},
    {source: Mosaic1, imgLabel: "", imgDesc: ""},
    {source: Recording, imgLabel: "", imgDesc: ""},], form: "", props:{props} }]

    const AthleteArray = [{otherBlog: true, images:[
    {source: BikeLynne, imgLabel: "", imgDesc: ""},
    {source: Ropes, imgLabel: "", imgDesc: ""},
    {source: Scuba2, imgLabel: "", imgDesc: ""},
    {source: ShootingPool, imgLabel: "", imgDesc: ""},
    {source: LilleRun, imgLabel: "", imgDesc: ""},
    {source: FirstBballTeam, imgLabel: "", imgDesc: ""},
    {source: AmsterdamBike, imgLabel: "", imgDesc: ""},
    {source: Snowboarding, imgLabel: "", imgDesc: ""},], form: "", props:{props} }]

    const ReaderArray = [{otherBlog: true, images:[
    {source: ShakespeareCoMoco, imgLabel: "", imgDesc: ""},
    {source: ReadFrench, imgLabel: "", imgDesc: ""},
    {source: NewYearsBook, imgLabel: "", imgDesc: ""},], form: {BookSug}, props:{props} }]

    const WritingArray = [{otherBlog: true, images:[{source: WritingBeer, imgLabel: "", imgDesc: ""}], form: {BookSug}, props:{props} }]

    // ALL ABOVE ARRAYS INTO ONE
    const floatLists = [{ artist : ArtistArray, musician : MusicianArray, softwareEngineer : SoftwareEngineerArray, writer : WriterArray, nomad : NomadArray, feminist : FeministArray, womanInTech : WomanInTechArray, musician : MusicArray, athlete : AthleteArray, reader : ReaderArray, writer : WritingArray,}]

    const floatList = floatLists.map(list => {return <AltBlog key={list.title} otherBlog={list.otherBlog} images={list.images} form={list.form} props={props}/>})


    
    return(
        {floatList}
    )
}
export default BlogLists;