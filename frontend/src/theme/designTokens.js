// Design System Tokens - Mobile-First Approach
// All spacing values use 8px base unit (1 = 8px in MUI)

export const typography = {
  h3: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },      // 28px → 32px → 40px (Name)
  h4: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },      // 24px → 28px → 32px (Section titles)
  h5: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem' },  // 20px → 22px → 24px (Subsections)
  h6: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem' },// 18px → 20px → 22px (Component titles)
  body1: '1rem',                                         // 16px (Primary body)
  body2: '0.875rem',                                     // 14px (Secondary body)
  caption: '0.75rem',                                    // 12px (Metadata - MINIMUM for accessibility)
  button: { xs: '0.875rem', md: '0.9375rem' },          // 14px → 15px
};

export const spacing = {
  sectionGap: { xs: 8, sm: 10, md: 12 },                // 64px → 80px → 96px
  sectionHeaderMb: { xs: 4, sm: 5, md: 6 },             // 32px → 40px → 48px
  componentGap: { xs: 2, sm: 2.5, md: 3 },              // 16px → 20px → 24px
  gridSpacing: { xs: 3, sm: 4, md: 5 },                 // 24px → 32px → 40px
  cardPadding: { xs: 2, sm: 2.5, md: 3 },               // 16px → 20px → 24px
};

export const sizing = {
  avatar: { xs: 88, sm: 104, md: 120 },                 // 88px → 104px → 120px
  techCircle: { xs: 32, sm: 34, md: 36 },               // 32px → 34px → 36px
  timelineDot: { xs: 10, sm: 11, md: 12 },              // 10px → 11px → 12px
  navLogo: { xs: 40, sm: 44, md: 48 },                  // 40px → 44px → 48px
  bannerHeight: { xs: '180px', sm: '220px', md: '280px' }, // Mobile-optimized banner
  touchTarget: 44,                                       // Minimum 44px for touch accessibility
};
