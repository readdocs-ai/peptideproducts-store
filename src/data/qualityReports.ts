// Links supplied for the named Alluvi sample; always verify batch and report details on the laboratory site.
export type QualityReport = { title: string; testId: number; href: string };

export const alluviRetatrutideReports: readonly QualityReport[] = [
  { title: "Purity test", testId: 239742, href: "https://verify.janoshik.com/tests/239742-ALLUVI_RETATRUTIDE_40MG_KIT_EM6LUXF19LHZ" },
  { title: "Heavy metals screening", testId: 240665, href: "https://verify.janoshik.com/tests/240665-ALLUVI_RETATRUTIDE_40MG_KIT_KGM7VLE9RPXB" },
  { title: "LC-MS screening", testId: 240666, href: "https://verify.janoshik.com/tests/240666-ALLUVI_RETATRUTIDE_40MG_KIT_9GRD3UU2R4K4" },
  { title: "Sterility test", testId: 240663, href: "https://verify.janoshik.com/tests/240663-ALLUVI_RETATRUTIDE_40MG_KIT_5JT37HIEBSYR" },
];

export const alluviTirzepatideReports: readonly QualityReport[] = [
  { title: "Purity test", testId: 239744, href: "https://verify.janoshik.com/tests/239744-ALLUVI_TIRZEPATIDE_40MG_KIT_S7637Z45SNLZ" },
  { title: "Heavy metals screening", testId: 240672, href: "https://verify.janoshik.com/tests/240672-ALLUVI_TIRZEPATIDE_40MG_KIT_QACPQ97FC66W" },
  { title: "LC-MS screening", testId: 240673, href: "https://verify.janoshik.com/tests/240673-ALLUVI_TIRZEPATIDE_40MG_KIT_NXEUFMQW5U95" },
  { title: "Sterility test", testId: 240674, href: "https://verify.janoshik.com/tests/240674-ALLUVI_TIRZEPATIDE_40MG_KIT_RTPQ764KAUNE" },
];

export const alluviNadReports: readonly QualityReport[] = [
  { title: "Analytical test", testId: 239746, href: "https://verify.janoshik.com/tests/239746-ALLUVI_NAD_1000MG_KIT_9N7ZBI9ZDGEL" },
];
