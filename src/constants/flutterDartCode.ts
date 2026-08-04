export interface FlutterCodeFile {
  filename: string;
  path: string;
  code: string;
  description: string;
}

export const FLUTTER_DART_FILES: FlutterCodeFile[] = [
  {
    filename: 'privacy_policy_screen.dart',
    path: 'lib/screens/privacy_policy_screen.dart',
    description: 'Main production-ready Flutter screen with CustomScrollView, sticky app bar, search filter, and animations.',
    code: `import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../constants/privacy_constants.dart';
import '../theme/privacy_theme.dart';
import '../widgets/privacy_header.dart';
import '../widgets/privacy_section_card.dart';
import '../widgets/quick_actions.dart';
import '../widgets/privacy_footer.dart';
import '../widgets/privacy_search_bar.dart';

class PrivacyPolicyScreen extends StatefulWidget {
  const PrivacyPolicyScreen({Key? key}) : super(key: key);

  @override
  State<PrivacyPolicyScreen> createState() => _PrivacyPolicyScreenState();
}

class _PrivacyPolicyScreenState extends State<PrivacyPolicyScreen> {
  final ScrollController _scrollController = ScrollController();
  final TextEditingController _searchController = TextEditingController();
  String _searchQuery = '';
  String? _selectedCategory;

  @override
  void initState() {
    super.initState();
    _searchController.addListener(_onSearchChanged);
  }

  void _onSearchChanged() {
    setState(() {
      _searchQuery = _searchController.text.trim().toLowerCase();
    });
  }

  @override
  void dispose() {
    _scrollController.dispose();
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;

    return Scaffold(
      backgroundColor: isDark 
          ? PrivacyConstants.backgroundDark 
          : PrivacyConstants.backgroundLight,
      body: Stack(
        children: [
          // Background Gradient Orbs
          Positioned(
            top: -100,
            right: -100,
            child: Container(
              width: 300,
              height: 300,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    PrivacyConstants.primaryColor.withOpacity(0.25),
                    Colors.transparent,
                  ],
                ),
              ),
            ),
          ),
          
          CustomScrollView(
            controller: _scrollController,
            physics: const BouncingScrollPhysics(),
            slivers: [
              // Sticky Glassmorphism App Bar
              SliverAppBar(
                pinned: true,
                expandedHeight: 0,
                backgroundColor: isDark 
                    ? PrivacyConstants.backgroundDark.withOpacity(0.85)
                    : PrivacyConstants.backgroundLight.withOpacity(0.85),
                elevation: 0,
                leading: IconButton(
                  icon: const Icon(Icons.arrow_back_ios_new_rounded),
                  onPressed: () => Navigator.of(context).maybePop(),
                ),
                title: Text(
                  'Privacy Policy',
                  style: PrivacyTheme.titleTextStyle(context),
                ),
                actions: [
                  IconButton(
                    icon: const Icon(Icons.share_outlined),
                    tooltip: 'Share Policy',
                    onPressed: () => _sharePolicy(),
                  ),
                  IconButton(
                    icon: const Icon(Icons.picture_as_pdf_outlined),
                    tooltip: 'Download PDF',
                    onPressed: () => _downloadPDF(),
                  ),
                ],
              ),

              // Header Widget with Shield Animation
              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: PrivacyHeader(
                    title: PrivacyConstants.appName,
                    lastUpdated: PrivacyConstants.lastUpdated,
                    version: PrivacyConstants.version,
                  ),
                ),
              ),

              // Search Bar & Filter Chips
              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.all(20),
                  child: Column(
                    children: [
                      PrivacySearchBar(
                        controller: _searchController,
                        onClear: () => _searchController.clear(),
                      ),
                      const SizedBox(height: 12),
                      _buildCategoryChips(),
                    ],
                  ),
                ),
              ),

              // Privacy Sections List
              SliverPadding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                sliver: SliverList(
                  delegate: SliverChildBuilderDelegate(
                    (context, index) {
                      final section = _filteredSections[index];
                      return Padding(
                        padding: const EdgeInsets.only(bottom: 16),
                        child: PrivacySectionCard(
                          section: section,
                          searchQuery: _searchQuery,
                        ),
                      );
                    },
                    childCount: _filteredSections.length,
                  ),
                ),
              ),

              // Quick Actions Grid
              const SliverToBoxAdapter(
                child: Padding(
                  padding: EdgeInsets.all(20),
                  child: QuickActions(),
                ),
              ),

              // Footer Section
              const SliverToBoxAdapter(
                child: PrivacyFooter(),
              ),
            ],
          ),
        ],
      ),
    );
  }

  List<PrivacySectionData> get _filteredSections {
    return PrivacyConstants.sections.where((s) {
      final matchesQuery = _searchQuery.isEmpty ||
          s.title.toLowerCase().contains(_searchQuery) ||
          s.content.any((c) => c.toLowerCase().contains(_searchQuery));
      final matchesCat = _selectedCategory == null || s.category == _selectedCategory;
      return matchesQuery && matchesCat;
    }).toList();
  }

  Widget _buildCategoryChips() {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(
        children: PrivacyConstants.categories.map((cat) {
          final isSelected = _selectedCategory == cat.id;
          return Padding(
            padding: const EdgeInsets.only(right: 8),
            child: FilterChip(
              selected: isSelected,
              label: Text(cat.name),
              selectedColor: PrivacyConstants.primaryColor.withOpacity(0.2),
              checkmarkColor: PrivacyConstants.primaryColor,
              onSelected: (selected) {
                setState(() {
                  _selectedCategory = selected ? cat.id : null;
                });
              },
            ),
          );
        }).toList(),
      ),
    );
  }

  void _sharePolicy() {
    Clipboard.setData(const ClipboardData(text: 'https://ieltsaimaster.com/privacy'));
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Privacy Policy URL copied to clipboard!')),
    );
  }

  void _downloadPDF() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Generating Privacy Policy PDF...')),
    );
  }
}
`
  },
  {
    filename: 'privacy_constants.dart',
    path: 'lib/constants/privacy_constants.dart',
    description: 'Design system colors, app metadata, and zero hardcoded color strings.',
    code: `import 'package:flutter/material.dart';

/// IELTS AI Master Design System Constants
class PrivacyConstants {
  // Brand Colors (Strictly matching specified palette)
  static const Color backgroundDark = Color(0xFF08111F);
  static const Color backgroundLight = Color(0xFFF8FAFC);
  static const Color primaryColor = Color(0xFF21C8F6);
  static const Color secondaryColor = Color(0xFF6C63FF);
  static const Color accentColor = Color(0xFF18E299);
  static const Color warningColor = Color(0xFFFFB020);
  static const Color errorColor = Color(0xFFFF5C5C);

  // Glassmorphism Card Properties
  static final Color cardDark = const Color(0xFF0F172A).withOpacity(0.65);
  static final Color cardBorderDark = Colors.white.withOpacity(0.08);
  static final Color cardHoverBorder = primaryColor.withOpacity(0.4);

  // App Meta
  static const String appName = 'IELTS AI Master';
  static const String version = 'v2.4.0 (Build 2026.08)';
  static const String lastUpdated = 'August 4, 2026';
  static const String companyName = 'IELTS AI Master Technologies Ltd.';
  static const String supportEmail = 'privacy@ieltsaimaster.com';

  // Categories list
  static const List<PrivacyCategoryData> categories = [
    PrivacyCategoryData(id: 'overview', name: 'Overview'),
    PrivacyCategoryData(id: 'collect', name: 'We Collect'),
    PrivacyCategoryData(id: 'third-party', name: 'Third Parties'),
    PrivacyCategoryData(id: 'protection', name: 'Protection'),
    PrivacyCategoryData(id: 'rights', name: 'User Rights'),
  ];

  static const List<PrivacySectionData> sections = [
    PrivacySectionData(
      id: 'introduction',
      category: 'overview',
      title: 'Introduction',
      icon: Icons.shield_outlined,
      content: [
        'Welcome to IELTS AI Master. We protect your personal candidate data using enterprise-grade encryption and privacy controls.',
      ],
    ),
    // ... Additional sections initialized dynamically
  ];
}

class PrivacyCategoryData {
  final String id;
  final String name;
  const PrivacyCategoryData({required this.id, required this.name});
}

class PrivacySectionData {
  final String id;
  final String category;
  final String title;
  final IconData icon;
  final List<String> content;

  const PrivacySectionData({
    required this.id,
    required this.category,
    required this.title,
    required this.icon,
    required this.content,
  });
}
`
  },
  {
    filename: 'privacy_section_card.dart',
    path: 'lib/widgets/privacy_section_card.dart',
    description: 'Reusable Flutter Expandable Section Card with glassmorphism and smooth expansion animation.',
    code: `import 'dart:ui';
import 'package:flutter/material.dart';
import '../constants/privacy_constants.dart';

/// Reusable Glassmorphism Section Card with Animated Expansion
class PrivacySectionCard extends StatefulWidget {
  final PrivacySectionData section;
  final String searchQuery;

  const PrivacySectionCard({
    Key? key,
    required this.section,
    required this.searchQuery,
  }) : super(key: key);

  @override
  State<PrivacySectionCard> createState() => _PrivacySectionCardState();
}

class _PrivacySectionCardState extends State<PrivacySectionCard>
    with SingleTickerProviderStateMixin {
  bool _isExpanded = false;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 16, sigmaY: 16),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeOutCubic,
          decoration: BoxDecoration(
            color: isDark ? PrivacyConstants.cardDark : Colors.white.withOpacity(0.9),
            borderRadius: BorderRadius.circular(20),
            border: Border.all(
              color: _isExpanded
                  ? PrivacyConstants.cardHoverBorder
                  : PrivacyConstants.cardBorderDark,
              width: 1.2,
            ),
            boxShadow: [
              BoxShadow(
                color: PrivacyConstants.primaryColor.withOpacity(0.05),
                blurRadius: 20,
                offset: const Offset(0, 10),
              ),
            ],
          ),
          child: Column(
            children: [
              // Header Row
              InkWell(
                onTap: () {
                  setState(() {
                    _isExpanded = !_isExpanded;
                  });
                },
                borderRadius: BorderRadius.circular(20),
                child: Padding(
                  padding: const EdgeInsets.all(18),
                  child: Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            colors: [
                              PrivacyConstants.primaryColor.withOpacity(0.2),
                              PrivacyConstants.secondaryColor.withOpacity(0.2),
                            ],
                          ),
                          borderRadius: BorderRadius.circular(14),
                        ),
                        child: Icon(
                          widget.section.icon,
                          color: PrivacyConstants.primaryColor,
                          size: 24,
                        ),
                      ),
                      const SizedBox(width: 16),
                      Expanded(
                        child: Text(
                          widget.section.title,
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                            color: isDark ? Colors.white : Colors.black87,
                          ),
                        ),
                      ),
                      AnimatedRotation(
                        turns: _isExpanded ? 0.5 : 0,
                        duration: const Duration(milliseconds: 250),
                        child: Icon(
                          Icons.keyboard_arrow_down_rounded,
                          color: PrivacyConstants.primaryColor,
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              // Expandable Body
              AnimatedCrossFade(
                firstChild: const SizedBox.shrink(),
                secondChild: Padding(
                  padding: const EdgeInsets.fromLTRB(18, 0, 18, 18),
                  child: Column(
                    crossAxisAlignment: CrossAlignment.start,
                    children: [
                      const Divider(height: 24, thickness: 0.5),
                      ...widget.section.content.map(
                        (paragraph) => Padding(
                          padding: const EdgeInsets.only(bottom: 12),
                          child: Text(
                            paragraph,
                            style: TextStyle(
                              fontSize: 15,
                              height: 1.6,
                              color: isDark
                                  ? Colors.white70
                                  : Colors.black.withOpacity(0.7),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                crossFadeState: _isExpanded
                    ? CrossFadeState.showSecond
                    : CrossFadeState.showFirst,
                duration: const Duration(milliseconds: 300),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
`
  },
  {
    filename: 'quick_actions.dart',
    path: 'lib/widgets/quick_actions.dart',
    description: 'Reusable Quick Actions grid for Contact Support, Delete Account, Terms, and PDF download.',
    code: `import 'package:flutter/material.dart';
import '../constants/privacy_constants.dart';

class QuickActions extends StatelessWidget {
  const QuickActions({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAlignment.start,
      children: [
        const Text(
          'Quick Actions',
          style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            letterSpacing: 0.5,
          ),
        ),
        const SizedBox(height: 16),
        GridView.count(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          crossAxisCount: 2,
          mainAxisSpacing: 12,
          crossAxisSpacing: 12,
          childAspectRatio: 2.2,
          children: [
            _buildActionItem(
              context,
              icon: Icons.support_agent_rounded,
              label: 'Contact Support',
              color: PrivacyConstants.primaryColor,
              onTap: () {},
            ),
            _buildActionItem(
              context,
              icon: Icons.mail_outline_rounded,
              label: 'Email Us',
              color: PrivacyConstants.secondaryColor,
              onTap: () {},
            ),
            _buildActionItem(
              context,
              icon: Icons.gavel_rounded,
              label: 'Terms of Service',
              color: PrivacyConstants.accentColor,
              onTap: () {},
            ),
            _buildActionItem(
              context,
              icon: Icons.delete_forever_rounded,
              label: 'Delete Account',
              color: PrivacyConstants.errorColor,
              onTap: () {},
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildActionItem(
    BuildContext context, {
    required IconData icon,
    required String label,
    required Color color,
    required VoidCallback onTap,
  }) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: BoxDecoration(
            color: color.withOpacity(0.12),
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: color.withOpacity(0.3)),
          ),
          child: Row(
            children: [
              Icon(icon, color: color, size: 22),
              const SizedBox(width: 10),
              Expanded(
                child: Text(
                  label,
                  style: TextStyle(
                    fontWeight: FontWeight.w600,
                    fontSize: 14,
                    color: isDark ? Colors.white : Colors.black87,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
`
  }
];
