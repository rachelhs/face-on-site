import React from 'react';
import logoStyles from './logo.module.css';
import { Section, Container, Title, TitleFAQ, TitleText, ParagraphTextFAQ } from '@components/global';
import aceLogo from '../../images/logos/lottery_Logo.png';
import swctnLogo from '../../images/logos/swctn.svg';
import pmsLogo from '../../images/logos/pmsLogo.png';

const FAQ = () => (
    <Section id="FAQ">
        <Container style={{ position: 'relative' }}>
            <Title><TitleText>FAQ</TitleText></Title>

            <TitleFAQ><TitleText>What is Facial Recognition?</TitleText></TitleFAQ>
            <ParagraphTextFAQ><h2>
                Automated Facial Recognition (AFR) is technology that can identify people by analysing and comparing facial features to those held in a database. These same facial features may also give rise to predictions about the demographic characteristics of the individual such as age, gender and ethnicity or even their emotional state.
            </h2></ParagraphTextFAQ>
            <TitleFAQ><TitleText>How is Facial Recognition being used?</TitleText></TitleFAQ>
            <ParagraphTextFAQ><h2>
                Globally:
            <br />
                In Moscow, Automated Facial Recognition has been used by the government to <a href="https://www.rte.ie/news/coronavirus/2020/0324/1124974-moscow-uses-facial-recognition-network-for-quarantine/" target="_blank" rel="noreferrer">enforce compulsory quarantine measures</a>.
            <br />
                <a href="https://www.telegraph.co.uk/news/2018/05/17/chinese-school-uses-facial-recognition-monitor-student-attention/" target="_blank">‘Smart Classrooms’</a> in Hangzhou, China have been monitoring the facial expressions of students, sending automated notifications to the teacher if they appear distracted.
            In Beijing, a public toilet has been <a href=" https://www.theguardian.com/world/2017/mar/20/face-scanners-public-toilet-tackle-loo-roll-theft-china-beijing" target="_blank" rel="noreferrer">combatting toilet roll theft</a> with dispensers embedded with Facial Recognition. Those who appear too often are denied more paper.
            <br />
                <br />
                In the UK:
            <br />
                The Metropolitan Police in London and the South Wales Police have been using live facial recognition in public to <a href="https://www.met.police.uk/advice/advice-and-information/facial-recognition/live-facial-recognition/" target="_blank" rel="noreferrer">assist police in finding wanted criminals</a>.
            AFR technology made by private company, ‘Facewatch’ is being used by shops across the UK to <a href="https://www.facewatch.co.uk/2019/08/05/the-observer-facial-recognition-coming-to-a-supermaket-near-you/" target="_blank" rel="noreferrer">catch shoplifters</a> including a Budgens in Aylesbury.
            <br />
                <br />
                In the South West:
            <br />
                <a href="https://www.bristolairport.co.uk/about-us/news-and-media/news-and-media-centre/2019/5/government-expands-use-of-epassport-gates" target="_blank" rel="noreferrer">ePassport gates</a> at Bristol airport have been checking arrivals.
            Meanwhile, Bristol’s Mayor Marvin Rees has been contemplating the use of AFR to <a href="https://www.bristolpost.co.uk/news/bristol-news/councils-face-recognition-tech-could-1800709" target="_blank" rel="noreferrer">catch litterers</a>.
            </h2></ParagraphTextFAQ>

            <TitleFAQ><TitleText>How accurate is it?</TitleText></TitleFAQ>
            <ParagraphTextFAQ><h2>
                According to <a href="http://gendershades.org/overview.html" target="_blank">Gender Shades</a>, a 2018 study which tested facial recognition products from Microsoft, IBM and Face++ (a leading Chinese firm), women are up to 20% more likely to be misidentified. Each system also proved to be up to 19% more accurate with lighter skin in comparison to darker.
            <br />
                <br />
                In a <a href="https://www.met.police.uk/SysSiteAssets/media/downloads/central/advice/met/facial-recognition/met-evaluation-report.pdf" target="_blank" rel="noreferrer">2020 report</a>, the Metropolitan Police stated that ‘differences in [facial recognition] algorithm performance due to ethnicity are not statistically significant although differences by gender are more marked.
            </h2></ParagraphTextFAQ>

            <TitleFAQ><TitleText>What about twins? What about surgical changes to a face?</TitleText></TitleFAQ>
            <ParagraphTextFAQ><h2>
                Identical twins appear to be a problem for facial recognition systems. For using Face ID to unlock an iPhone, <a href="https://support.apple.com/en-gb/HT208108" target="_blank" rel="noreferrer">Apple stated that</a> ‘The probability that a random person in the population could look at your iPhone or iPad Pro and unlock it using Face ID is approximately 1 in 1,000,000 with a single enrolled appearance … the statistical probability is different for twins and siblings that look like you and among children under the age of 13, because their distinct facial features may not have fully developed. If you're concerned about this, we recommend using a passcode to authenticate.’
            <br />
                <br />
                According to <a href="https://journals.lww.com/plasreconsurg/Pages/videogallery.aspx?videoId=1587" target="_blank" rel="noreferrer">a study by the American Society of Plastic Surgeons</a>, surgical transformations to a face are likely to cause trouble for facial recognition systems including more minor procedures like cosmetic fillers and fixing a broken nose. They even go so far as to warn about passport control problems following surgery abroad.
            </h2></ParagraphTextFAQ>


            <TitleFAQ><TitleText>Where is Facial Recognition banned?</TitleText></TitleFAQ>
            <ParagraphTextFAQ><h2>
                In San Francisco, Somerville Massachusetts and Oakland California there are city wide bans on the deployment of facial recognition technology, including by police, until further notice.
            <br />
            <br />
                The <a href="https://www.euractiv.com/section/digital/news/eu-seeks-clear-criteria-for-use-of-biometric-ai-on-mass-scale/" target="_blank" rel="noreferrer">EU considered a temporary ban</a> of the technology in public places such as train stations, sports stadiums and shopping centres in order to gain time in preventing abuses. Instead, it is now proposing an assessment with ‘clear criteria about which individuals should be identified’ in cases of mass surveillance.
            </h2></ParagraphTextFAQ>

            <br />
            <br />

            <Title><TitleText>SUPPORTED BY</TitleText></Title>
            <a href="https://www.artscouncil.org.uk/" target="_blank" rel="noopener noreferrer"><img className={logoStyles.supportedLogo} src={aceLogo} alt="arts council logo"></img></a>
            <a href="https://www.swctn.org.uk/" target="_blank" rel="noopener noreferrer"><img className={logoStyles.supportedLogo} src={swctnLogo} alt="south west creative technology network logo"></img></a>
            <a href="https://www.watershed.co.uk/studio/" target="_blank" rel="noopener noreferrer"><img className={logoStyles.supportedLogoTall} src={pmsLogo} alt="pervasive media studio logo"></img></a>

            <ParagraphTextFAQ><h2>
            Visual Design for Face / On has been develop with <a href="https://copa-ipa.de/" target="_blank" rel="noopener noreferrer">Copa Ipa. </a>Metalwork by Tom Cherry. Produced with support from <a href="https://www.control-shift.network/index.html" target="_blank" rel="noopener noreferrer">Control Shift</a>. Thank you to Ruby Soho for lending your workshop and Professor Andrew Charlesworth for sharing your knowledge and ideas around facial recognition.
            </h2></ParagraphTextFAQ>

        </Container>
    </Section>
);
export default FAQ;