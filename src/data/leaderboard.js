const createActivity = (name, category, date, points) => ({
  name,
  category,
  date,
  points,
})

const createEntry = (id, name, role, code, initials, avatarTone, activities) => ({
  id,
  name,
  role,
  code,
  initials,
  avatarTone,
  activities,
})

export const leaderboardEntries = [
  createEntry(1, 'Ava Johnson', 'Product Strategy Lead', 'US-PSL-001', 'AJ', 'toneBlue', [
    createActivity('Campus mentorship workshop', 'Education', '2025-01-01', 48),
    createActivity('Capstone project review', 'University Partnership', '2025-05-08', 59),
    createActivity('Leadership forum panel', 'Public speaking', '2025-09-15', 70),
    createActivity('Intern interview prep session', 'Education', '2025-01-22', 81),
    createActivity('Career fair strategy meeting', 'University Partnership', '2025-05-02', 92)
  ]),
  createEntry(2, 'Liam Carter', 'Customer Success Manager', 'US-CSM-002', 'LC', 'toneSlate', [
    createActivity('Guest lecture coordination', 'University Partnership', '2024-04-06', 65),
    createActivity('Webinar Q&A session', 'Public speaking', '2024-08-13', 76),
    createActivity('Academic support briefing', 'Education', '2024-12-20', 87),
    createActivity('Research collaboration sync', 'University Partnership', '2024-04-27', 98),
    createActivity('Industry panel discussion', 'Public speaking', '2024-08-07', 109)
  ]),
  createEntry(3, 'Emma Brooks', 'Data Analytics Manager', 'US-DAM-003', 'EB', 'toneRose', [
    createActivity('Town hall update', 'Public speaking', '2025-07-11', 82),
    createActivity('Study group facilitation', 'Education', '2025-11-18', 93),
    createActivity('Admissions partnership session', 'University Partnership', '2025-03-25', 104),
    createActivity('Workshop opening remarks', 'Public speaking', '2025-07-05', 51),
    createActivity('Faculty advisory workshop', 'Education', '2025-11-12', 62)
  ]),
  createEntry(4, 'Noah Mitchell', 'Field Marketing Lead', 'US-FML-004', 'NM', 'toneWarm', [
    createActivity('Bootcamp feedback circle', 'Education', '2024-10-16', 99),
    createActivity('Advisory board check-in', 'University Partnership', '2024-02-23', 110),
    createActivity('Executive keynote rehearsal', 'Public speaking', '2024-06-03', 57),
    createActivity('Campus mentorship workshop', 'Education', '2024-10-10', 68),
    createActivity('Capstone project review', 'University Partnership', '2024-02-17', 79)
  ]),
  createEntry(5, 'Olivia Parker', 'Operations Program Manager', 'US-OPM-005', 'OP', 'toneApricot', [
    createActivity('University partner planning call', 'University Partnership', '2025-01-21', 52),
    createActivity('Community meetup presentation', 'Public speaking', '2025-05-01', 63),
    createActivity('Curriculum review roundtable', 'Education', '2025-09-08', 74),
    createActivity('Guest lecture coordination', 'University Partnership', '2025-01-15', 85),
    createActivity('Webinar Q&A session', 'Public speaking', '2025-05-22', 96)
  ]),
  createEntry(6, 'Mason Reed', 'Talent Acquisition Partner', 'US-TAP-006', 'MR', 'toneCyan', [
    createActivity('Conference lightning talk', 'Public speaking', '2024-04-26', 69),
    createActivity('Learning pathway office hours', 'Education', '2024-08-06', 80),
    createActivity('Campus visit with faculty', 'University Partnership', '2024-12-13', 91),
    createActivity('Town hall update', 'Public speaking', '2024-04-20', 102),
    createActivity('Study group facilitation', 'Education', '2024-08-27', 49)
  ]),
  createEntry(7, 'Sophia Bennett', 'Learning Experience Designer', 'US-LED-007', 'SB', 'toneLime', [
    createActivity('Skills lab for apprentices', 'Education', '2025-07-04', 86),
    createActivity('Scholarship program review', 'University Partnership', '2025-11-11', 97),
    createActivity('Podcast guest interview', 'Public speaking', '2025-03-18', 108),
    createActivity('Bootcamp feedback circle', 'Education', '2025-07-25', 55),
    createActivity('Advisory board check-in', 'University Partnership', '2025-11-05', 66)
  ]),
  createEntry(8, 'Elijah Foster', 'Community Engagement Director', 'US-CED-008', 'EF', 'toneSky', [
    createActivity('Lab demo for university team', 'University Partnership', '2024-10-09', 103),
    createActivity('Roundtable moderator role', 'Public speaking', '2024-02-16', 50),
    createActivity('Training session for students', 'Education', '2024-06-23', 61),
    createActivity('University partner planning call', 'University Partnership', '2024-10-03', 72),
    createActivity('Community meetup presentation', 'Public speaking', '2024-02-10', 83)
  ]),
  createEntry(9, 'Isabella Hayes', 'Sales Enablement Manager', 'US-SEM-009', 'IH', 'toneAmber', [
    createActivity('Regional tech keynote', 'Public speaking', '2025-01-14', 56),
    createActivity('Student coaching clinic', 'Education', '2025-05-21', 67),
    createActivity('STEM outreach roundtable', 'University Partnership', '2025-09-01', 78),
    createActivity('Conference lightning talk', 'Public speaking', '2025-01-08', 89),
    createActivity('Learning pathway office hours', 'Education', '2025-05-15', 100)
  ]),
  createEntry(10, 'James Collins', 'Implementation Consultant', 'US-IC-010', 'JC', 'toneIndigo', [
    createActivity('Intern interview prep session', 'Education', '2024-04-19', 73),
    createActivity('Career fair strategy meeting', 'University Partnership', '2024-08-26', 84),
    createActivity('Alumni career story session', 'Public speaking', '2024-12-06', 95),
    createActivity('Skills lab for apprentices', 'Education', '2024-04-13', 106),
    createActivity('Scholarship program review', 'University Partnership', '2024-08-20', 53)
  ]),
  createEntry(11, 'Mia Turner', 'UX Researcher', 'US-UR-011', 'MT', 'tonePink', [
    createActivity('Research collaboration sync', 'University Partnership', '2025-07-24', 90),
    createActivity('Industry panel discussion', 'Public speaking', '2025-11-04', 101),
    createActivity('Career readiness seminar', 'Education', '2025-03-11', 48),
    createActivity('Lab demo for university team', 'University Partnership', '2025-07-18', 59),
    createActivity('Roundtable moderator role', 'Public speaking', '2025-11-25', 70)
  ]),
  createEntry(12, 'Lucas Morgan', 'Engineering Manager', 'US-EM-012', 'LM', 'toneViolet', [
    createActivity('Workshop opening remarks', 'Public speaking', '2024-10-02', 107),
    createActivity('Faculty advisory workshop', 'Education', '2024-02-09', 54),
    createActivity('Student pipeline planning', 'University Partnership', '2024-06-16', 65),
    createActivity('Regional tech keynote', 'Public speaking', '2024-10-23', 76),
    createActivity('Student coaching clinic', 'Education', '2024-02-03', 87)
  ]),
  createEntry(13, 'Charlotte Price', 'Technical Program Manager', 'US-TPM-013', 'CP', 'toneBlue', [
    createActivity('Campus mentorship workshop', 'Education', '2025-01-07', 60),
    createActivity('Capstone project review', 'University Partnership', '2025-05-14', 71),
    createActivity('Leadership forum panel', 'Public speaking', '2025-09-21', 82),
    createActivity('Intern interview prep session', 'Education', '2025-01-01', 93),
    createActivity('Career fair strategy meeting', 'University Partnership', '2025-05-08', 104)
  ]),
  createEntry(14, 'Henry Evans', 'Brand Partnerships Lead', 'US-BPL-014', 'HE', 'toneSlate', [
    createActivity('Guest lecture coordination', 'University Partnership', '2024-04-12', 77),
    createActivity('Webinar Q&A session', 'Public speaking', '2024-08-19', 88),
    createActivity('Academic support briefing', 'Education', '2024-12-26', 99),
    createActivity('Research collaboration sync', 'University Partnership', '2024-04-06', 110),
    createActivity('Industry panel discussion', 'Public speaking', '2024-08-13', 57)
  ]),
  createEntry(15, 'Amelia Richardson', 'Finance Operations Analyst', 'US-FOA-015', 'AR', 'toneRose', [
    createActivity('Town hall update', 'Public speaking', '2025-07-17', 94),
    createActivity('Study group facilitation', 'Education', '2025-11-24', 105),
    createActivity('Admissions partnership session', 'University Partnership', '2025-03-04', 52),
    createActivity('Workshop opening remarks', 'Public speaking', '2025-07-11', 63),
    createActivity('Faculty advisory workshop', 'Education', '2025-11-18', 74)
  ]),
  createEntry(16, 'Benjamin Walker', 'Training Coordinator', 'US-TC-016', 'BW', 'toneWarm', [
    createActivity('Bootcamp feedback circle', 'Education', '2024-10-22', 111),
    createActivity('Advisory board check-in', 'University Partnership', '2024-02-02', 58),
    createActivity('Executive keynote rehearsal', 'Public speaking', '2024-06-09', 69),
    createActivity('Campus mentorship workshop', 'Education', '2024-10-16', 80),
    createActivity('Capstone project review', 'University Partnership', '2024-02-23', 91)
  ]),
  createEntry(17, 'Harper Adams', 'People Operations Manager', 'US-POM-017', 'HA', 'toneApricot', [
    createActivity('University partner planning call', 'University Partnership', '2025-01-27', 64),
    createActivity('Community meetup presentation', 'Public speaking', '2025-05-07', 75),
    createActivity('Curriculum review roundtable', 'Education', '2025-09-14', 86),
    createActivity('Guest lecture coordination', 'University Partnership', '2025-01-21', 97),
    createActivity('Webinar Q&A session', 'Public speaking', '2025-05-01', 108)
  ]),
  createEntry(18, 'William Roberts', 'Product Marketing Manager', 'US-PMM-018', 'WR', 'toneCyan', [
    createActivity('Conference lightning talk', 'Public speaking', '2024-04-05', 81),
    createActivity('Learning pathway office hours', 'Education', '2024-08-12', 92),
    createActivity('Campus visit with faculty', 'University Partnership', '2024-12-19', 103),
    createActivity('Town hall update', 'Public speaking', '2024-04-26', 50),
    createActivity('Study group facilitation', 'Education', '2024-08-06', 61)
  ]),
  createEntry(19, 'Evelyn Bell', 'Regional Events Manager', 'US-REM-019', 'EB', 'toneLime', [
    createActivity('Skills lab for apprentices', 'Education', '2025-07-10', 98),
    createActivity('Scholarship program review', 'University Partnership', '2025-11-17', 109),
    createActivity('Podcast guest interview', 'Public speaking', '2025-03-24', 56),
    createActivity('Bootcamp feedback circle', 'Education', '2025-07-04', 67),
    createActivity('Advisory board check-in', 'University Partnership', '2025-11-11', 78)
  ]),
  createEntry(20, 'Alexander Murphy', 'Solutions Architect', 'US-SA-020', 'AM', 'toneSky', [
    createActivity('Lab demo for university team', 'University Partnership', '2024-10-15', 51),
    createActivity('Roundtable moderator role', 'Public speaking', '2024-02-22', 62),
    createActivity('Training session for students', 'Education', '2024-06-02', 73),
    createActivity('University partner planning call', 'University Partnership', '2024-10-09', 84),
    createActivity('Community meetup presentation', 'Public speaking', '2024-02-16', 95)
  ]),
  createEntry(21, 'Abigail Cook', 'Account Executive', 'US-AE-021', 'AC', 'toneAmber', [
    createActivity('Regional tech keynote', 'Public speaking', '2025-01-20', 68),
    createActivity('Student coaching clinic', 'Education', '2025-05-27', 79),
    createActivity('STEM outreach roundtable', 'University Partnership', '2025-09-07', 90),
    createActivity('Conference lightning talk', 'Public speaking', '2025-01-14', 101),
    createActivity('Learning pathway office hours', 'Education', '2025-05-21', 48)
  ]),
  createEntry(22, 'Daniel Rivera', 'Support Escalation Lead', 'US-SEL-022', 'DR', 'toneIndigo', [
    createActivity('Intern interview prep session', 'Education', '2024-04-25', 85),
    createActivity('Career fair strategy meeting', 'University Partnership', '2024-08-05', 96),
    createActivity('Alumni career story session', 'Public speaking', '2024-12-12', 107),
    createActivity('Skills lab for apprentices', 'Education', '2024-04-19', 54),
    createActivity('Scholarship program review', 'University Partnership', '2024-08-26', 65)
  ]),
  createEntry(23, 'Ella Sanders', 'Research Program Manager', 'US-RPM-023', 'ES', 'tonePink', [
    createActivity('Research collaboration sync', 'University Partnership', '2025-07-03', 102),
    createActivity('Industry panel discussion', 'Public speaking', '2025-11-10', 49),
    createActivity('Career readiness seminar', 'Education', '2025-03-17', 60),
    createActivity('Lab demo for university team', 'University Partnership', '2025-07-24', 71),
    createActivity('Roundtable moderator role', 'Public speaking', '2025-11-04', 82)
  ]),
  createEntry(24, 'Michael Cooper', 'Developer Advocate', 'US-DA-024', 'MC', 'toneViolet', [
    createActivity('Workshop opening remarks', 'Public speaking', '2024-10-08', 55),
    createActivity('Faculty advisory workshop', 'Education', '2024-02-15', 66),
    createActivity('Student pipeline planning', 'University Partnership', '2024-06-22', 77),
    createActivity('Regional tech keynote', 'Public speaking', '2024-10-02', 88),
    createActivity('Student coaching clinic', 'Education', '2024-02-09', 99)
  ]),
  createEntry(25, 'Grace Peterson', 'Internal Communications Manager', 'US-ICM-025', 'GP', 'toneBlue', [
    createActivity('Campus mentorship workshop', 'Education', '2025-01-13', 72),
    createActivity('Capstone project review', 'University Partnership', '2025-05-20', 83),
    createActivity('Leadership forum panel', 'Public speaking', '2025-09-27', 94),
    createActivity('Intern interview prep session', 'Education', '2025-01-07', 105),
    createActivity('Career fair strategy meeting', 'University Partnership', '2025-05-14', 52)
  ]),
  createEntry(26, 'Samuel Gray', 'Curriculum Developer', 'US-CD-026', 'SG', 'toneSlate', [
    createActivity('Guest lecture coordination', 'University Partnership', '2024-04-18', 89),
    createActivity('Webinar Q&A session', 'Public speaking', '2024-08-25', 100),
    createActivity('Academic support briefing', 'Education', '2024-12-05', 111),
    createActivity('Research collaboration sync', 'University Partnership', '2024-04-12', 58),
    createActivity('Industry panel discussion', 'Public speaking', '2024-08-19', 69)
  ]),
  createEntry(27, 'Zoe Howard', 'Partner Success Lead', 'US-PSL-027', 'ZH', 'toneRose', [
    createActivity('Town hall update', 'Public speaking', '2025-07-23', 106),
    createActivity('Study group facilitation', 'Education', '2025-11-03', 53),
    createActivity('Admissions partnership session', 'University Partnership', '2025-03-10', 64),
    createActivity('Workshop opening remarks', 'Public speaking', '2025-07-17', 75),
    createActivity('Faculty advisory workshop', 'Education', '2025-11-24', 86)
  ]),
  createEntry(28, 'Jack Russell', 'Business Operations Analyst', 'US-BOA-028', 'JR', 'toneWarm', [
    createActivity('Bootcamp feedback circle', 'Education', '2024-10-01', 59),
    createActivity('Advisory board check-in', 'University Partnership', '2024-02-08', 70),
    createActivity('Executive keynote rehearsal', 'Public speaking', '2024-06-15', 81),
    createActivity('Campus mentorship workshop', 'Education', '2024-10-22', 92),
    createActivity('Capstone project review', 'University Partnership', '2024-02-02', 103)
  ]),
  createEntry(29, 'Lily Jenkins', 'Event Production Manager', 'US-EPM-029', 'LJ', 'toneApricot', [
    createActivity('University partner planning call', 'University Partnership', '2025-01-06', 76),
    createActivity('Community meetup presentation', 'Public speaking', '2025-05-13', 87),
    createActivity('Curriculum review roundtable', 'Education', '2025-09-20', 98),
    createActivity('Guest lecture coordination', 'University Partnership', '2025-01-27', 109),
    createActivity('Webinar Q&A session', 'Public speaking', '2025-05-07', 56)
  ]),
  createEntry(30, 'Owen Patterson', 'Advocacy Campaign Lead', 'US-ACL-030', 'OP', 'toneCyan', [
    createActivity('Conference lightning talk', 'Public speaking', '2024-04-11', 93),
    createActivity('Learning pathway office hours', 'Education', '2024-08-18', 104),
    createActivity('Campus visit with faculty', 'University Partnership', '2024-12-25', 51),
    createActivity('Town hall update', 'Public speaking', '2024-04-05', 62),
    createActivity('Study group facilitation', 'Education', '2024-08-12', 73)
  ]),
  createEntry(31, 'Chloe Long', 'Product Strategy Lead', 'US-PSL-031', 'CL', 'toneLime', [
    createActivity('Skills lab for apprentices', 'Education', '2025-07-16', 110),
    createActivity('Scholarship program review', 'University Partnership', '2025-11-23', 57),
    createActivity('Podcast guest interview', 'Public speaking', '2025-03-03', 68),
    createActivity('Bootcamp feedback circle', 'Education', '2025-07-10', 79),
    createActivity('Advisory board check-in', 'University Partnership', '2025-11-17', 90)
  ]),
  createEntry(32, 'Levi Coleman', 'Customer Success Manager', 'US-CSM-032', 'LC', 'toneSky', [
    createActivity('Lab demo for university team', 'University Partnership', '2024-10-21', 63),
    createActivity('Roundtable moderator role', 'Public speaking', '2024-02-01', 74),
    createActivity('Training session for students', 'Education', '2024-06-08', 85),
    createActivity('University partner planning call', 'University Partnership', '2024-10-15', 96),
    createActivity('Community meetup presentation', 'Public speaking', '2024-02-22', 107)
  ]),
  createEntry(33, 'Nora Simmons', 'Data Analytics Manager', 'US-DAM-033', 'NS', 'toneAmber', [
    createActivity('Regional tech keynote', 'Public speaking', '2025-01-26', 80),
    createActivity('Student coaching clinic', 'Education', '2025-05-06', 91),
    createActivity('STEM outreach roundtable', 'University Partnership', '2025-09-13', 102),
    createActivity('Conference lightning talk', 'Public speaking', '2025-01-20', 49),
    createActivity('Learning pathway office hours', 'Education', '2025-05-27', 60)
  ]),
  createEntry(34, 'Wyatt Hughes', 'Field Marketing Lead', 'US-FML-034', 'WH', 'toneIndigo', [
    createActivity('Intern interview prep session', 'Education', '2024-04-04', 97),
    createActivity('Career fair strategy meeting', 'University Partnership', '2024-08-11', 108),
    createActivity('Alumni career story session', 'Public speaking', '2024-12-18', 55),
    createActivity('Skills lab for apprentices', 'Education', '2024-04-25', 66),
    createActivity('Scholarship program review', 'University Partnership', '2024-08-05', 77)
  ]),
  createEntry(35, 'Scarlett Bailey', 'Operations Program Manager', 'US-OPM-035', 'SB', 'tonePink', [
    createActivity('Research collaboration sync', 'University Partnership', '2025-07-09', 50),
    createActivity('Industry panel discussion', 'Public speaking', '2025-11-16', 61),
    createActivity('Career readiness seminar', 'Education', '2025-03-23', 72),
    createActivity('Lab demo for university team', 'University Partnership', '2025-07-03', 83),
    createActivity('Roundtable moderator role', 'Public speaking', '2025-11-10', 94)
  ]),
  createEntry(36, 'Hudson Ward', 'Talent Acquisition Partner', 'US-TAP-036', 'HW', 'toneViolet', [
    createActivity('Workshop opening remarks', 'Public speaking', '2024-10-14', 67),
    createActivity('Faculty advisory workshop', 'Education', '2024-02-21', 78),
    createActivity('Student pipeline planning', 'University Partnership', '2024-06-01', 89),
    createActivity('Regional tech keynote', 'Public speaking', '2024-10-08', 100),
    createActivity('Student coaching clinic', 'Education', '2024-02-15', 111)
  ]),
  createEntry(37, 'Hannah Barnes', 'Learning Experience Designer', 'US-LED-037', 'HB', 'toneBlue', [
    createActivity('Campus mentorship workshop', 'Education', '2025-01-19', 84),
    createActivity('Capstone project review', 'University Partnership', '2025-05-26', 95),
    createActivity('Leadership forum panel', 'Public speaking', '2025-09-06', 106),
    createActivity('Intern interview prep session', 'Education', '2025-01-13', 53),
    createActivity('Career fair strategy meeting', 'University Partnership', '2025-05-20', 64)
  ]),
  createEntry(38, 'Caleb Kelly', 'Community Engagement Director', 'US-CED-038', 'CK', 'toneSlate', [
    createActivity('Guest lecture coordination', 'University Partnership', '2024-04-24', 101),
    createActivity('Webinar Q&A session', 'Public speaking', '2024-08-04', 48),
    createActivity('Academic support briefing', 'Education', '2024-12-11', 59),
    createActivity('Research collaboration sync', 'University Partnership', '2024-04-18', 70),
    createActivity('Industry panel discussion', 'Public speaking', '2024-08-25', 81)
  ]),
  createEntry(39, 'Ellie Ross', 'Sales Enablement Manager', 'US-SEM-039', 'ER', 'toneRose', [
    createActivity('Town hall update', 'Public speaking', '2025-07-02', 54),
    createActivity('Study group facilitation', 'Education', '2025-11-09', 65),
    createActivity('Admissions partnership session', 'University Partnership', '2025-03-16', 76),
    createActivity('Workshop opening remarks', 'Public speaking', '2025-07-23', 87),
    createActivity('Faculty advisory workshop', 'Education', '2025-11-03', 98)
  ]),
  createEntry(40, 'Penelope Shaw', 'Implementation Consultant', 'US-IC-040', 'PS', 'toneWarm', [
    createActivity('Bootcamp feedback circle', 'Education', '2024-10-07', 71),
    createActivity('Advisory board check-in', 'University Partnership', '2024-02-14', 82),
    createActivity('Executive keynote rehearsal', 'Public speaking', '2024-06-21', 93),
    createActivity('Campus mentorship workshop', 'Education', '2024-10-01', 104),
    createActivity('Capstone project review', 'University Partnership', '2024-02-08', 51)
  ]),
  createEntry(41, 'Julian Wood', 'UX Researcher', 'US-UR-041', 'JW', 'toneApricot', [
    createActivity('University partner planning call', 'University Partnership', '2025-01-12', 88),
    createActivity('Community meetup presentation', 'Public speaking', '2025-05-19', 99),
    createActivity('Curriculum review roundtable', 'Education', '2025-09-26', 110),
    createActivity('Guest lecture coordination', 'University Partnership', '2025-01-06', 57),
    createActivity('Webinar Q&A session', 'Public speaking', '2025-05-13', 68)
  ]),
  createEntry(42, 'Stella Stone', 'Engineering Manager', 'US-EM-042', 'SS', 'toneCyan', [
    createActivity('Conference lightning talk', 'Public speaking', '2024-04-17', 105),
    createActivity('Learning pathway office hours', 'Education', '2024-08-24', 52),
    createActivity('Campus visit with faculty', 'University Partnership', '2024-12-04', 63),
    createActivity('Town hall update', 'Public speaking', '2024-04-11', 74),
    createActivity('Study group facilitation', 'Education', '2024-08-18', 85)
  ]),
  createEntry(43, 'Carter Webb', 'Technical Program Manager', 'US-TPM-043', 'CW', 'toneLime', [
    createActivity('Skills lab for apprentices', 'Education', '2025-07-22', 58),
    createActivity('Scholarship program review', 'University Partnership', '2025-11-02', 69),
    createActivity('Podcast guest interview', 'Public speaking', '2025-03-09', 80),
    createActivity('Bootcamp feedback circle', 'Education', '2025-07-16', 91),
    createActivity('Advisory board check-in', 'University Partnership', '2025-11-23', 102)
  ]),
  createEntry(44, 'Violet Stewart', 'Brand Partnerships Lead', 'US-BPL-044', 'VS', 'toneSky', [
    createActivity('Lab demo for university team', 'University Partnership', '2024-10-27', 75),
    createActivity('Roundtable moderator role', 'Public speaking', '2024-02-07', 86),
    createActivity('Training session for students', 'Education', '2024-06-14', 97),
    createActivity('University partner planning call', 'University Partnership', '2024-10-21', 108),
    createActivity('Community meetup presentation', 'Public speaking', '2024-02-01', 55)
  ]),
  createEntry(45, 'Andrew Owens', 'Finance Operations Analyst', 'US-FOA-045', 'AO', 'toneAmber', [
    createActivity('Regional tech keynote', 'Public speaking', '2025-01-05', 92),
    createActivity('Student coaching clinic', 'Education', '2025-05-12', 103),
    createActivity('STEM outreach roundtable', 'University Partnership', '2025-09-19', 50),
    createActivity('Conference lightning talk', 'Public speaking', '2025-01-26', 61),
    createActivity('Learning pathway office hours', 'Education', '2025-05-06', 72)
  ]),
  createEntry(46, 'Audrey Fisher', 'Training Coordinator', 'US-TC-046', 'AF', 'toneIndigo', [
    createActivity('Intern interview prep session', 'Education', '2024-04-10', 109),
    createActivity('Career fair strategy meeting', 'University Partnership', '2024-08-17', 56),
    createActivity('Alumni career story session', 'Public speaking', '2024-12-24', 67),
    createActivity('Skills lab for apprentices', 'Education', '2024-04-04', 78),
    createActivity('Scholarship program review', 'University Partnership', '2024-08-11', 89)
  ]),
  createEntry(47, 'Thomas Gomez', 'People Operations Manager', 'US-POM-047', 'TG', 'tonePink', [
    createActivity('Research collaboration sync', 'University Partnership', '2025-07-15', 62),
    createActivity('Industry panel discussion', 'Public speaking', '2025-11-22', 73),
    createActivity('Career readiness seminar', 'Education', '2025-03-02', 84),
    createActivity('Lab demo for university team', 'University Partnership', '2025-07-09', 95),
    createActivity('Roundtable moderator role', 'Public speaking', '2025-11-16', 106)
  ]),
  createEntry(48, 'Naomi Myers', 'Product Marketing Manager', 'US-PMM-048', 'NM', 'toneViolet', [
    createActivity('Workshop opening remarks', 'Public speaking', '2024-10-20', 79),
    createActivity('Faculty advisory workshop', 'Education', '2024-02-27', 90),
    createActivity('Student pipeline planning', 'University Partnership', '2024-06-07', 101),
    createActivity('Regional tech keynote', 'Public speaking', '2024-10-14', 48),
    createActivity('Student coaching clinic', 'Education', '2024-02-21', 59)
  ]),
  createEntry(49, 'Joseph Rogers', 'Regional Events Manager', 'US-REM-049', 'JR', 'toneBlue', [
    createActivity('Campus mentorship workshop', 'Education', '2025-01-25', 96),
    createActivity('Capstone project review', 'University Partnership', '2025-05-05', 107),
    createActivity('Leadership forum panel', 'Public speaking', '2025-09-12', 54),
    createActivity('Intern interview prep session', 'Education', '2025-01-19', 65),
    createActivity('Career fair strategy meeting', 'University Partnership', '2025-05-26', 76)
  ]),
  createEntry(50, 'Sadie Brooks', 'Solutions Architect', 'US-SA-050', 'SB', 'toneSlate', [
    createActivity('Guest lecture coordination', 'University Partnership', '2024-04-03', 49),
    createActivity('Webinar Q&A session', 'Public speaking', '2024-08-10', 60),
    createActivity('Academic support briefing', 'Education', '2024-12-17', 71),
    createActivity('Research collaboration sync', 'University Partnership', '2024-04-24', 82),
    createActivity('Industry panel discussion', 'Public speaking', '2024-08-04', 93)
  ]),
  createEntry(51, 'Leo Foster', 'Account Executive', 'US-AE-051', 'LF', 'toneRose', [
    createActivity('Town hall update', 'Public speaking', '2025-07-08', 66),
    createActivity('Study group facilitation', 'Education', '2025-11-15', 77),
    createActivity('Admissions partnership session', 'University Partnership', '2025-03-22', 88),
    createActivity('Workshop opening remarks', 'Public speaking', '2025-07-02', 99),
    createActivity('Faculty advisory workshop', 'Education', '2025-11-09', 110)
  ]),
  createEntry(52, 'Ruby Powell', 'Support Escalation Lead', 'US-SEL-052', 'RP', 'toneWarm', [
    createActivity('Bootcamp feedback circle', 'Education', '2024-10-13', 83),
    createActivity('Advisory board check-in', 'University Partnership', '2024-02-20', 94),
    createActivity('Executive keynote rehearsal', 'Public speaking', '2024-06-27', 105),
    createActivity('Campus mentorship workshop', 'Education', '2024-10-07', 52),
    createActivity('Capstone project review', 'University Partnership', '2024-02-14', 63)
  ]),
  createEntry(53, 'Logan Thompson', 'Research Program Manager', 'US-RPM-053', 'LT', 'toneApricot', [
    createActivity('University partner planning call', 'University Partnership', '2025-01-18', 100),
    createActivity('Community meetup presentation', 'Public speaking', '2025-05-25', 111),
    createActivity('Curriculum review roundtable', 'Education', '2025-09-05', 58),
    createActivity('Guest lecture coordination', 'University Partnership', '2025-01-12', 69),
    createActivity('Webinar Q&A session', 'Public speaking', '2025-05-19', 80)
  ]),
  createEntry(54, 'Claire Hall', 'Developer Advocate', 'US-DA-054', 'CH', 'toneCyan', [
    createActivity('Conference lightning talk', 'Public speaking', '2024-04-23', 53),
    createActivity('Learning pathway office hours', 'Education', '2024-08-03', 64),
    createActivity('Campus visit with faculty', 'University Partnership', '2024-12-10', 75),
    createActivity('Town hall update', 'Public speaking', '2024-04-17', 86),
    createActivity('Study group facilitation', 'Education', '2024-08-24', 97)
  ]),
  createEntry(55, 'Ryan Bennett', 'Internal Communications Manager', 'US-ICM-055', 'RB', 'toneLime', [
    createActivity('Skills lab for apprentices', 'Education', '2025-07-01', 70),
    createActivity('Scholarship program review', 'University Partnership', '2025-11-08', 81),
    createActivity('Podcast guest interview', 'Public speaking', '2025-03-15', 92),
    createActivity('Bootcamp feedback circle', 'Education', '2025-07-22', 103),
    createActivity('Advisory board check-in', 'University Partnership', '2025-11-02', 50)
  ]),
  createEntry(56, 'Madeline Diaz', 'Curriculum Developer', 'US-CD-056', 'MD', 'toneSky', [
    createActivity('Lab demo for university team', 'University Partnership', '2024-10-06', 87),
    createActivity('Roundtable moderator role', 'Public speaking', '2024-02-13', 98),
    createActivity('Training session for students', 'Education', '2024-06-20', 109),
    createActivity('University partner planning call', 'University Partnership', '2024-10-27', 56),
    createActivity('Community meetup presentation', 'Public speaking', '2024-02-07', 67)
  ]),
  createEntry(57, 'Dylan Lawson', 'Partner Success Lead', 'US-PSL-057', 'DL', 'toneAmber', [
    createActivity('Regional tech keynote', 'Public speaking', '2025-01-11', 104),
    createActivity('Student coaching clinic', 'Education', '2025-05-18', 51),
    createActivity('STEM outreach roundtable', 'University Partnership', '2025-09-25', 62),
    createActivity('Conference lightning talk', 'Public speaking', '2025-01-05', 73),
    createActivity('Learning pathway office hours', 'Education', '2025-05-12', 84)
  ]),
  createEntry(58, 'Brooklyn Perry', 'Business Operations Analyst', 'US-BOA-058', 'BP', 'toneIndigo', [
    createActivity('Intern interview prep session', 'Education', '2024-04-16', 57),
    createActivity('Career fair strategy meeting', 'University Partnership', '2024-08-23', 68),
    createActivity('Alumni career story session', 'Public speaking', '2024-12-03', 79),
    createActivity('Skills lab for apprentices', 'Education', '2024-04-10', 90),
    createActivity('Scholarship program review', 'University Partnership', '2024-08-17', 101)
  ]),
  createEntry(59, 'Ethan Harper', 'Event Production Manager', 'US-EPM-059', 'EH', 'tonePink', [
    createActivity('Research collaboration sync', 'University Partnership', '2025-07-21', 74),
    createActivity('Industry panel discussion', 'Public speaking', '2025-11-01', 85),
    createActivity('Career readiness seminar', 'Education', '2025-03-08', 96),
    createActivity('Lab demo for university team', 'University Partnership', '2025-07-15', 107),
    createActivity('Roundtable moderator role', 'Public speaking', '2025-11-22', 54)
  ]),
  createEntry(60, 'Mila Ward', 'Advocacy Campaign Lead', 'US-ACL-060', 'MW', 'toneViolet', [
    createActivity('Workshop opening remarks', 'Public speaking', '2024-10-26', 91),
    createActivity('Faculty advisory workshop', 'Education', '2024-02-06', 102),
    createActivity('Student pipeline planning', 'University Partnership', '2024-06-13', 49),
    createActivity('Regional tech keynote', 'Public speaking', '2024-10-20', 60),
    createActivity('Student coaching clinic', 'Education', '2024-02-27', 71)
  ]),
  createEntry(61, 'Jordan Simmons', 'Product Strategy Lead', 'US-PSL-061', 'JS', 'toneBlue', [
    createActivity('Campus mentorship workshop', 'Education', '2025-01-04', 108),
    createActivity('Capstone project review', 'University Partnership', '2025-05-11', 55),
    createActivity('Leadership forum panel', 'Public speaking', '2025-09-18', 66),
    createActivity('Intern interview prep session', 'Education', '2025-01-25', 77),
    createActivity('Career fair strategy meeting', 'University Partnership', '2025-05-05', 88)
  ])
]
