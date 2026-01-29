import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    IconButton,
    Avatar,
    TextField,
    Fade,
    Slide,
    Zoom,
    alpha,
    Divider,
    Chip,
    Paper,
    Tooltip
} from '@mui/material';

// Icons
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';

import { useThemeMode } from './context/ThemeContext';

const LandingPage = () => {
    const navigate = useNavigate();
    const { mode, toggleTheme, isDark } = useThemeMode();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // Color scheme based on theme
    const colors = {
        background: isDark ? '#0f172a' : '#ffffff',
        backgroundAlt: isDark ? '#1e293b' : '#f8fafc',
        text: isDark ? '#f1f5f9' : '#1e293b',
        textSecondary: isDark ? '#94a3b8' : '#64748b',
        primary: '#6366f1',
        primaryLight: '#818cf8',
        primaryDark: '#4f46e5',
        accent: '#8b5cf6',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        border: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
        cardBg: isDark ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255,255,255,0.9)',
        navBg: isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255,255,255,0.95)',
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
            setMobileMenuOpen(false);
        }
    };

    const features = [
        {
            icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
            title: 'AI-Powered Quiz Generation',
            description: 'Harness the power of Google Gemini AI to automatically generate intelligent MCQs, short answers, and descriptive questions from any topic.',
            gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            highlight: 'Gemini 2.5 Flash'
        },
        {
            icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
            title: 'Adaptive Learning Engine',
            description: 'Smart algorithms that adapt to each student\'s learning pace, providing personalized difficulty progression and recommendations.',
            gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
            highlight: 'Personalized'
        },
        {
            icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
            title: 'Real-time Analytics Dashboard',
            description: 'Comprehensive performance tracking with interactive charts, topic-wise breakdown, skill progression, and detailed student insights.',
            gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
            highlight: 'Live Data'
        },
        {
            icon: <QuizIcon sx={{ fontSize: 40 }} />,
            title: 'Multi-Format Assessments',
            description: 'Support for MCQ, Short Answer, and Long Answer questions. Auto-grading for objective questions and instructor review for subjective.',
            gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
            highlight: 'Auto-Grading'
        },
        {
            icon: <SecurityIcon sx={{ fontSize: 40 }} />,
            title: 'Secure & Role-Based Access',
            description: 'JWT authentication with role-based access control. Separate dashboards for instructors and students with protected routes.',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
            highlight: 'JWT + RBAC'
        },
        {
            icon: <StorageIcon sx={{ fontSize: 40 }} />,
            title: 'Course & Material Management',
            description: 'Create courses with multiple topics, upload study materials, organize content by difficulty levels, and track student enrollment.',
            gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
            highlight: 'Full LMS'
        }
    ];

    const techStack = [
        { name: 'React 18', icon: <CodeIcon />, color: '#61DAFB' },
        { name: 'Spring Boot 3', icon: <ApiIcon />, color: '#6DB33F' },
        { name: 'Material UI', icon: <AutoAwesomeIcon />, color: '#007FFF' },
        { name: 'Google Gemini', icon: <SmartToyIcon />, color: '#4285F4' },
        { name: 'JWT Security', icon: <SecurityIcon />, color: '#D63AFF' },
        { name: 'MySQL / H2', icon: <StorageIcon />, color: '#4479A1' },
    ];

    const developers = [
        {
            name: 'Kavyaa Suresh',
            role: 'Full Stack Developer',
            avatar: 'KS',
            color: '#6366f1',
            linkedin: 'https://linkedin.com/',
            github: 'https://github.com/',
            skills: ['React', 'Spring Boot', 'AI Integration'],
            contribution: 'Frontend Architecture & AI Quiz Generation'
        },
        {
            name: 'Samarth Kapdi',
            role: 'Backend Developer',
            avatar: 'SK',
            color: '#8b5cf6',
            linkedin: 'https://linkedin.com/',
            github: 'https://github.com/',
            skills: ['Java', 'MySQL', 'REST APIs'],
            contribution: 'Backend Services & Database Design'
        },
        {
            name: 'Team Member 3',
            role: 'Frontend Developer',
            avatar: 'TM',
            color: '#3b82f6',
            linkedin: 'https://linkedin.com/',
            github: 'https://github.com/',
            skills: ['React', 'MUI', 'Recharts'],
            contribution: 'UI Components & Analytics Dashboard'
        },
        {
            name: 'Team Member 4',
            role: 'QA & Documentation',
            avatar: 'TM',
            color: '#10b981',
            linkedin: 'https://linkedin.com/',
            github: 'https://github.com/',
            skills: ['Testing', 'Documentation', 'API Testing'],
            contribution: 'Quality Assurance & Project Documentation'
        }
    ];

    const stats = [
        { value: '15+', label: 'API Endpoints', icon: <ApiIcon /> },
        { value: '18', label: 'Entity Models', icon: <StorageIcon /> },
        { value: '6', label: 'Core Features', icon: <StarIcon /> },
        { value: '100%', label: 'Real-time Data', icon: <TrendingUpIcon /> }
    ];

    const projectHighlights = [
        'Infosys Springboard Virtual Internship Project',
        'Full-Stack Web Application',
        'AI-Powered Exam Generation',
        'Real-time Performance Analytics',
        'Adaptive Learning System',
        'Production-Ready Codebase'
    ];

    const navItems = ['home', 'features', 'tech', 'developers', 'contact'];

    return (
        <Box sx={{
            minHeight: '100vh',
            bgcolor: colors.background,
            color: colors.text,
            overflow: 'hidden',
            transition: 'all 0.3s ease'
        }}>
            {/* ==================== NAVBAR ==================== */}
            <Box
                component="nav"
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    py: 2,
                    px: { xs: 2, md: 6 },
                    bgcolor: scrolled ? colors.navBg : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderBottom: scrolled ? `1px solid ${colors.border}` : 'none',
                    transition: 'all 0.3s ease'
                }}
            >
                <Container maxWidth="xl">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* Logo */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box sx={{
                                width: 45,
                                height: 45,
                                borderRadius: 3,
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)'
                            }}>
                                <AutoAwesomeIcon sx={{ color: 'white', fontSize: 28 }} />
                            </Box>
                            <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: -0.5, color: colors.text }}>
                                Skill<span style={{ color: '#6366f1' }}>Forge</span>
                            </Typography>
                        </Box>

                        {/* Desktop Nav */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
                            {navItems.map((item) => (
                                <Typography
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    sx={{
                                        cursor: 'pointer',
                                        fontWeight: 600,
                                        textTransform: 'capitalize',
                                        color: activeSection === item ? '#6366f1' : colors.textSecondary,
                                        transition: 'color 0.3s ease',
                                        '&:hover': { color: '#6366f1' }
                                    }}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>

                        {/* Auth Buttons & Theme Toggle */}
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                            {/* Theme Toggle */}
                            <Tooltip title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                                <IconButton
                                    onClick={toggleTheme}
                                    sx={{
                                        bgcolor: isDark ? alpha('#fff', 0.1) : alpha('#000', 0.05),
                                        color: colors.text,
                                        '&:hover': {
                                            bgcolor: isDark ? alpha('#fff', 0.15) : alpha('#000', 0.1),
                                            transform: 'rotate(180deg)'
                                        },
                                        transition: 'all 0.4s ease'
                                    }}
                                >
                                    {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                                </IconButton>
                            </Tooltip>

                            <Button
                                onClick={() => navigate('/login')}
                                sx={{
                                    display: { xs: 'none', sm: 'flex' },
                                    color: colors.text,
                                    fontWeight: 700,
                                    '&:hover': { bgcolor: alpha(colors.primary, 0.1) }
                                }}
                            >
                                Sign In
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => navigate('/register')}
                                sx={{
                                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                    fontWeight: 700,
                                    px: 3,
                                    borderRadius: 3,
                                    boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 12px 40px rgba(99, 102, 241, 0.4)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Get Started
                            </Button>
                            <IconButton
                                sx={{ display: { md: 'none' }, color: colors.text }}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Mobile Menu */}
            <Slide direction="down" in={mobileMenuOpen}>
                <Box sx={{
                    position: 'fixed',
                    top: 80,
                    left: 0,
                    right: 0,
                    bgcolor: colors.navBg,
                    backdropFilter: 'blur(20px)',
                    zIndex: 999,
                    p: 3,
                    display: { md: 'none' }
                }}>
                    {navItems.map((item) => (
                        <Typography
                            key={item}
                            onClick={() => scrollToSection(item)}
                            sx={{
                                py: 2,
                                fontWeight: 600,
                                textTransform: 'capitalize',
                                color: activeSection === item ? '#6366f1' : colors.text,
                                borderBottom: `1px solid ${colors.border}`
                            }}
                        >
                            {item}
                        </Typography>
                    ))}
                </Box>
            </Slide>

            {/* ==================== HERO SECTION ==================== */}
            <Box
                id="home"
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    pt: 10,
                    background: isDark
                        ? 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.15) 0%, transparent 50%)'
                        : 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.08) 0%, transparent 50%)'
                }}
            >
                {/* Decorative Elements */}
                <Box sx={{
                    position: 'absolute',
                    top: '15%',
                    right: '10%',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    display: { xs: 'none', md: 'block' }
                }} />

                <Container maxWidth="xl">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Fade in timeout={1000}>
                                <Box>
                                    {/* Project Badge */}
                                    <Chip
                                        icon={<EmojiEventsIcon sx={{ fontSize: 18 }} />}
                                        label="Infosys Springboard Internship Project"
                                        sx={{
                                            mb: 3,
                                            bgcolor: alpha('#6366f1', isDark ? 0.2 : 0.1),
                                            color: '#6366f1',
                                            fontWeight: 600,
                                            border: `1px solid ${alpha('#6366f1', 0.3)}`,
                                            '& .MuiChip-icon': { color: '#6366f1' }
                                        }}
                                    />

                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                                            fontWeight: 900,
                                            lineHeight: 1.15,
                                            mb: 3,
                                            letterSpacing: -2,
                                            color: colors.text
                                        }}
                                    >
                                        AI-Driven{' '}
                                        <Box
                                            component="span"
                                            sx={{
                                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent'
                                            }}
                                        >
                                            Adaptive Learning
                                        </Box>{' '}
                                        & Exam Generator
                                    </Typography>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: colors.textSecondary,
                                            mb: 4,
                                            fontWeight: 400,
                                            lineHeight: 1.8,
                                            maxWidth: 550
                                        }}
                                    >
                                        A comprehensive Learning Management System powered by <strong>Google Gemini AI</strong>.
                                        Create intelligent quizzes, track student performance with real-time analytics,
                                        and deliver personalized learning experiences.
                                    </Typography>

                                    {/* Key Highlights */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                                        {['React + Vite', 'Spring Boot', 'Gemini AI', 'JWT Auth', 'Analytics'].map((tech, i) => (
                                            <Chip
                                                key={i}
                                                label={tech}
                                                size="small"
                                                icon={<VerifiedIcon sx={{ fontSize: 14 }} />}
                                                sx={{
                                                    bgcolor: alpha(colors.primary, isDark ? 0.15 : 0.08),
                                                    color: colors.text,
                                                    fontWeight: 600,
                                                    '& .MuiChip-icon': { color: '#10b981' }
                                                }}
                                            />
                                        ))}
                                    </Box>

                                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            endIcon={<ArrowForwardIcon />}
                                            onClick={() => navigate('/register')}
                                            sx={{
                                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                                fontWeight: 700,
                                                px: 4,
                                                py: 1.5,
                                                borderRadius: 3,
                                                fontSize: '1rem',
                                                boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
                                                '&:hover': {
                                                    transform: 'translateY(-3px)',
                                                    boxShadow: '0 16px 48px rgba(99, 102, 241, 0.4)'
                                                },
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            Start Exploring
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            startIcon={<PlayArrowIcon />}
                                            onClick={() => navigate('/login')}
                                            sx={{
                                                borderColor: alpha(colors.primary, 0.5),
                                                color: colors.text,
                                                fontWeight: 700,
                                                px: 4,
                                                py: 1.5,
                                                borderRadius: 3,
                                                fontSize: '1rem',
                                                '&:hover': {
                                                    borderColor: '#6366f1',
                                                    bgcolor: alpha('#6366f1', 0.1)
                                                }
                                            }}
                                        >
                                            Sign In
                                        </Button>
                                    </Box>

                                    {/* Stats */}
                                    <Box sx={{ display: 'flex', gap: 4, mt: 6, flexWrap: 'wrap' }}>
                                        {stats.map((stat, i) => (
                                            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                <Box sx={{
                                                    p: 1,
                                                    borderRadius: 2,
                                                    bgcolor: alpha('#6366f1', isDark ? 0.2 : 0.1),
                                                    color: '#6366f1'
                                                }}>
                                                    {stat.icon}
                                                </Box>
                                                <Box>
                                                    <Typography variant="h5" sx={{ fontWeight: 900, color: '#6366f1' }}>
                                                        {stat.value}
                                                    </Typography>
                                                    <Typography variant="caption" sx={{ color: colors.textSecondary, fontWeight: 600 }}>
                                                        {stat.label}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </Fade>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Zoom in timeout={1200}>
                                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                                    {/* Main Dashboard Preview */}
                                    <Paper
                                        elevation={isDark ? 24 : 8}
                                        sx={{
                                            width: '100%',
                                            maxWidth: 500,
                                            borderRadius: 5,
                                            overflow: 'hidden',
                                            bgcolor: colors.cardBg,
                                            backdropFilter: 'blur(20px)',
                                            border: `1px solid ${colors.border}`,
                                            boxShadow: isDark
                                                ? '0 40px 80px rgba(0,0,0,0.5)'
                                                : '0 25px 60px rgba(0,0,0,0.12)'
                                        }}
                                    >
                                        {/* Mock Header */}
                                        <Box sx={{
                                            p: 2,
                                            borderBottom: `1px solid ${colors.border}`,
                                            display: 'flex',
                                            gap: 1,
                                            alignItems: 'center'
                                        }}>
                                            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56' }} />
                                            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                                            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27c93f' }} />
                                            <Typography variant="caption" sx={{ ml: 2, color: colors.textSecondary, fontWeight: 600 }}>
                                                SkillForge Dashboard
                                            </Typography>
                                        </Box>

                                        {/* Mock Content */}
                                        <Box sx={{ p: 3 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                                <Avatar sx={{ bgcolor: '#6366f1', width: 48, height: 48 }}>
                                                    <SchoolIcon />
                                                </Avatar>
                                                <Box>
                                                    <Typography fontWeight={700} color={colors.text}>Welcome, Instructor!</Typography>
                                                    <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                                                        Dashboard Overview
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <Grid container spacing={2}>
                                                {[
                                                    { label: 'Courses', value: '12', color: '#6366f1', icon: <SchoolIcon sx={{ fontSize: 20 }} /> },
                                                    { label: 'Students', value: '248', color: '#8b5cf6', icon: <GroupsIcon sx={{ fontSize: 20 }} /> },
                                                    { label: 'AI Quizzes', value: '56', color: '#3b82f6', icon: <SmartToyIcon sx={{ fontSize: 20 }} /> },
                                                    { label: 'Avg Score', value: '87%', color: '#10b981', icon: <TrendingUpIcon sx={{ fontSize: 20 }} /> }
                                                ].map((item, i) => (
                                                    <Grid item xs={6} key={i}>
                                                        <Box sx={{
                                                            p: 2,
                                                            borderRadius: 3,
                                                            bgcolor: alpha(item.color, isDark ? 0.15 : 0.08),
                                                            border: `1px solid ${alpha(item.color, 0.2)}`
                                                        }}>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                                                                <Box sx={{ color: item.color }}>{item.icon}</Box>
                                                            </Box>
                                                            <Typography variant="h5" fontWeight={900} sx={{ color: item.color }}>
                                                                {item.value}
                                                            </Typography>
                                                            <Typography variant="caption" sx={{ color: colors.textSecondary }}>
                                                                {item.label}
                                                            </Typography>
                                                        </Box>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Box>
                                    </Paper>

                                    {/* Floating Elements */}
                                    <Paper sx={{
                                        position: 'absolute',
                                        top: -20,
                                        right: { xs: 10, md: -20 },
                                        p: 2,
                                        borderRadius: 3,
                                        bgcolor: colors.cardBg,
                                        backdropFilter: 'blur(20px)',
                                        border: `1px solid ${colors.border}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        boxShadow: isDark ? '0 20px 40px rgba(0,0,0,0.3)' : '0 15px 35px rgba(0,0,0,0.1)'
                                    }}>
                                        <Box sx={{ p: 1, borderRadius: 2, bgcolor: alpha('#10b981', 0.15) }}>
                                            <CheckCircleIcon sx={{ color: '#10b981' }} />
                                        </Box>
                                        <Box>
                                            <Typography variant="body2" fontWeight={700} color={colors.text}>AI Quiz Ready!</Typography>
                                            <Typography variant="caption" sx={{ color: colors.textSecondary }}>15 questions generated</Typography>
                                        </Box>
                                    </Paper>

                                    <Paper sx={{
                                        position: 'absolute',
                                        bottom: 40,
                                        left: { xs: 10, md: -30 },
                                        p: 2,
                                        borderRadius: 3,
                                        bgcolor: colors.cardBg,
                                        backdropFilter: 'blur(20px)',
                                        border: `1px solid ${colors.border}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        boxShadow: isDark ? '0 20px 40px rgba(0,0,0,0.3)' : '0 15px 35px rgba(0,0,0,0.1)'
                                    }}>
                                        <Box sx={{ p: 1, borderRadius: 2, bgcolor: alpha('#6366f1', 0.15) }}>
                                            <SmartToyIcon sx={{ color: '#6366f1' }} />
                                        </Box>
                                        <Box>
                                            <Typography variant="body2" fontWeight={700} color={colors.text}>Gemini AI</Typography>
                                            <Typography variant="caption" sx={{ color: colors.textSecondary }}>Powered by Google</Typography>
                                        </Box>
                                    </Paper>
                                </Box>
                            </Zoom>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* ==================== FEATURES SECTION ==================== */}
            <Box id="features" sx={{ py: 12, bgcolor: colors.backgroundAlt }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Chip
                            label="Core Features"
                            sx={{
                                mb: 3,
                                bgcolor: alpha('#6366f1', isDark ? 0.2 : 0.1),
                                color: '#6366f1',
                                fontWeight: 600,
                                border: `1px solid ${alpha('#6366f1', 0.3)}`
                            }}
                        />
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 900,
                                mb: 2,
                                fontSize: { xs: '2rem', md: '2.75rem' },
                                letterSpacing: -1,
                                color: colors.text
                            }}
                        >
                            Everything You Need for{' '}
                            <Box component="span" sx={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                Smart Education
                            </Box>
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ color: colors.textSecondary, maxWidth: 650, mx: 'auto', fontWeight: 400 }}
                        >
                            A complete LMS with AI-powered quiz generation, real-time analytics, and adaptive learning capabilities
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Fade in timeout={800 + index * 150}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            bgcolor: colors.cardBg,
                                            backdropFilter: 'blur(20px)',
                                            border: `1px solid ${colors.border}`,
                                            borderRadius: 4,
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                transform: 'translateY(-10px)',
                                                borderColor: alpha('#6366f1', 0.5),
                                                boxShadow: isDark
                                                    ? '0 30px 60px rgba(0,0,0,0.3)'
                                                    : '0 20px 50px rgba(0,0,0,0.12)',
                                                '& .feature-icon': {
                                                    transform: 'scale(1.1)'
                                                }
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: 4 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                                <Box
                                                    className="feature-icon"
                                                    sx={{
                                                        width: 70,
                                                        height: 70,
                                                        borderRadius: 4,
                                                        background: feature.gradient,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white',
                                                        transition: 'transform 0.4s ease',
                                                        boxShadow: '0 12px 28px rgba(0,0,0,0.15)'
                                                    }}
                                                >
                                                    {feature.icon}
                                                </Box>
                                                <Chip
                                                    label={feature.highlight}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: alpha('#10b981', isDark ? 0.2 : 0.1),
                                                        color: '#10b981',
                                                        fontWeight: 700,
                                                        fontSize: '0.65rem'
                                                    }}
                                                />
                                            </Box>
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: 800, mb: 1.5, color: colors.text }}
                                            >
                                                {feature.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: colors.textSecondary, lineHeight: 1.7 }}
                                            >
                                                {feature.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Fade>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* ==================== TECH STACK SECTION ==================== */}
            <Box id="tech" sx={{ py: 10, bgcolor: colors.background }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Chip
                            label="Technology Stack"
                            sx={{
                                mb: 3,
                                bgcolor: alpha('#8b5cf6', isDark ? 0.2 : 0.1),
                                color: '#8b5cf6',
                                fontWeight: 600,
                                border: `1px solid ${alpha('#8b5cf6', 0.3)}`
                            }}
                        />
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 900,
                                mb: 2,
                                fontSize: { xs: '1.75rem', md: '2.25rem' },
                                color: colors.text
                            }}
                        >
                            Built with Modern Technologies
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: 3
                    }}>
                        {techStack.map((tech, i) => (
                            <Zoom in timeout={600 + i * 100} key={i}>
                                <Paper
                                    sx={{
                                        p: 3,
                                        borderRadius: 4,
                                        bgcolor: colors.cardBg,
                                        border: `1px solid ${colors.border}`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        minWidth: 140,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            borderColor: tech.color,
                                            boxShadow: `0 15px 35px ${alpha(tech.color, 0.2)}`
                                        }
                                    }}
                                >
                                    <Box sx={{ color: tech.color, fontSize: 32 }}>
                                        {tech.icon}
                                    </Box>
                                    <Typography fontWeight={700} color={colors.text}>
                                        {tech.name}
                                    </Typography>
                                </Paper>
                            </Zoom>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* ==================== DEVELOPERS SECTION ==================== */}
            <Box id="developers" sx={{ py: 12, bgcolor: colors.backgroundAlt }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Chip
                            label="Our Team"
                            sx={{
                                mb: 3,
                                bgcolor: alpha('#ec4899', isDark ? 0.2 : 0.1),
                                color: '#ec4899',
                                fontWeight: 600,
                                border: `1px solid ${alpha('#ec4899', 0.3)}`
                            }}
                        />
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 900,
                                mb: 2,
                                fontSize: { xs: '2rem', md: '2.75rem' },
                                letterSpacing: -1,
                                color: colors.text
                            }}
                        >
                            Meet the{' '}
                            <Box component="span" sx={{
                                background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                Developers
                            </Box>
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ color: colors.textSecondary, maxWidth: 600, mx: 'auto', fontWeight: 400 }}
                        >
                            The passionate team behind SkillForge, building the future of adaptive learning
                        </Typography>
                    </Box>

                    <Grid container spacing={4} justifyContent="center">
                        {developers.map((dev, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Zoom in timeout={800 + index * 150}>
                                    <Card
                                        sx={{
                                            textAlign: 'center',
                                            bgcolor: colors.cardBg,
                                            backdropFilter: 'blur(20px)',
                                            border: `1px solid ${colors.border}`,
                                            borderRadius: 4,
                                            overflow: 'visible',
                                            pt: 6,
                                            transition: 'all 0.4s ease',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                borderColor: alpha(dev.color, 0.5),
                                                boxShadow: `0 25px 50px ${alpha(dev.color, isDark ? 0.25 : 0.15)}`
                                            }
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                width: 90,
                                                height: 90,
                                                mx: 'auto',
                                                mt: -8,
                                                fontSize: '1.75rem',
                                                fontWeight: 900,
                                                bgcolor: dev.color,
                                                border: `4px solid ${colors.background}`,
                                                boxShadow: `0 12px 30px ${alpha(dev.color, 0.4)}`
                                            }}
                                        >
                                            {dev.avatar}
                                        </Avatar>
                                        <CardContent sx={{ pt: 2.5 }}>
                                            <Typography variant="h6" fontWeight={800} sx={{ mb: 0.5, color: colors.text }}>
                                                {dev.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: dev.color, fontWeight: 600, mb: 1.5 }}
                                            >
                                                {dev.role}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: colors.textSecondary,
                                                    display: 'block',
                                                    mb: 2,
                                                    fontStyle: 'italic'
                                                }}
                                            >
                                                {dev.contribution}
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'center', mb: 2, flexWrap: 'wrap' }}>
                                                {dev.skills.map((skill, i) => (
                                                    <Chip
                                                        key={i}
                                                        label={skill}
                                                        size="small"
                                                        sx={{
                                                            bgcolor: alpha(dev.color, isDark ? 0.2 : 0.1),
                                                            color: dev.color,
                                                            fontSize: '0.65rem',
                                                            fontWeight: 600,
                                                            border: `1px solid ${alpha(dev.color, 0.3)}`
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                                                <IconButton
                                                    size="small"
                                                    href={dev.linkedin}
                                                    target="_blank"
                                                    sx={{
                                                        color: colors.textSecondary,
                                                        '&:hover': { color: dev.color, bgcolor: alpha(dev.color, 0.1) }
                                                    }}
                                                >
                                                    <LinkedInIcon fontSize="small" />
                                                </IconButton>
                                                <IconButton
                                                    size="small"
                                                    href={dev.github}
                                                    target="_blank"
                                                    sx={{
                                                        color: colors.textSecondary,
                                                        '&:hover': { color: dev.color, bgcolor: alpha(dev.color, 0.1) }
                                                    }}
                                                >
                                                    <GitHubIcon fontSize="small" />
                                                </IconButton>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Zoom>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* ==================== CONTACT SECTION ==================== */}
            <Box id="contact" sx={{ py: 12, bgcolor: colors.background }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={5}>
                            <Chip
                                label="Get In Touch"
                                sx={{
                                    mb: 3,
                                    bgcolor: alpha('#3b82f6', isDark ? 0.2 : 0.1),
                                    color: '#3b82f6',
                                    fontWeight: 600,
                                    border: `1px solid ${alpha('#3b82f6', 0.3)}`
                                }}
                            />
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 900,
                                    mb: 2,
                                    fontSize: { xs: '2rem', md: '2.75rem' },
                                    letterSpacing: -1,
                                    color: colors.text
                                }}
                            >
                                Let's Start a{' '}
                                <Box component="span" sx={{
                                    background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Conversation
                                </Box>
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ color: colors.textSecondary, mb: 4, lineHeight: 1.8 }}
                            >
                                Have questions about SkillForge? Want to schedule a demo or discuss the project?
                                We'd love to hear from you!
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                {[
                                    { icon: <EmailIcon />, label: 'skillforge@edu.com', color: '#6366f1' },
                                    { icon: <PhoneIcon />, label: '+91 98765 43210', color: '#8b5cf6' },
                                    { icon: <LocationOnIcon />, label: 'Chennai, Tamil Nadu, India', color: '#3b82f6' }
                                ].map((item, i) => (
                                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{
                                            p: 1.5,
                                            borderRadius: 3,
                                            bgcolor: alpha(item.color, isDark ? 0.2 : 0.1),
                                            color: item.color
                                        }}>
                                            {item.icon}
                                        </Box>
                                        <Typography fontWeight={600} color={colors.text}>{item.label}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <Paper
                                sx={{
                                    p: 5,
                                    borderRadius: 5,
                                    bgcolor: colors.cardBg,
                                    backdropFilter: 'blur(20px)',
                                    border: `1px solid ${colors.border}`
                                }}
                            >
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="First Name"
                                            variant="outlined"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 3,
                                                    bgcolor: alpha(colors.background, 0.5),
                                                    '& fieldset': { borderColor: colors.border },
                                                    '&:hover fieldset': { borderColor: alpha('#6366f1', 0.5) },
                                                    '&.Mui-focused fieldset': { borderColor: '#6366f1' }
                                                },
                                                '& .MuiInputLabel-root': { color: colors.textSecondary },
                                                '& .MuiInputBase-input': { color: colors.text }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Last Name"
                                            variant="outlined"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 3,
                                                    bgcolor: alpha(colors.background, 0.5),
                                                    '& fieldset': { borderColor: colors.border },
                                                    '&:hover fieldset': { borderColor: alpha('#6366f1', 0.5) },
                                                    '&.Mui-focused fieldset': { borderColor: '#6366f1' }
                                                },
                                                '& .MuiInputLabel-root': { color: colors.textSecondary },
                                                '& .MuiInputBase-input': { color: colors.text }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            variant="outlined"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 3,
                                                    bgcolor: alpha(colors.background, 0.5),
                                                    '& fieldset': { borderColor: colors.border },
                                                    '&:hover fieldset': { borderColor: alpha('#6366f1', 0.5) },
                                                    '&.Mui-focused fieldset': { borderColor: '#6366f1' }
                                                },
                                                '& .MuiInputLabel-root': { color: colors.textSecondary },
                                                '& .MuiInputBase-input': { color: colors.text }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Your Message"
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 3,
                                                    bgcolor: alpha(colors.background, 0.5),
                                                    '& fieldset': { borderColor: colors.border },
                                                    '&:hover fieldset': { borderColor: alpha('#6366f1', 0.5) },
                                                    '&.Mui-focused fieldset': { borderColor: '#6366f1' }
                                                },
                                                '& .MuiInputLabel-root': { color: colors.textSecondary },
                                                '& .MuiInputBase-input': { color: colors.text }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            size="large"
                                            endIcon={<SendIcon />}
                                            sx={{
                                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                                fontWeight: 700,
                                                py: 1.5,
                                                borderRadius: 3,
                                                fontSize: '1rem',
                                                '&:hover': {
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 12px 40px rgba(99, 102, 241, 0.4)'
                                                },
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* ==================== FOOTER ==================== */}
            <Box
                sx={{
                    py: 4,
                    borderTop: `1px solid ${colors.border}`,
                    bgcolor: colors.backgroundAlt
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 2
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box sx={{
                                width: 35,
                                height: 35,
                                borderRadius: 2,
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <AutoAwesomeIcon sx={{ color: 'white', fontSize: 20 }} />
                            </Box>
                            <Typography fontWeight={800} color={colors.text}>
                                Skill<span style={{ color: '#6366f1' }}>Forge</span>
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: colors.textSecondary, textAlign: 'center' }}>
                            © 2026 SkillForge | Infosys Springboard Internship Project | Built with ❤️ for Education
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {[<GitHubIcon key="gh" />, <LinkedInIcon key="li" />, <EmailIcon key="em" />].map((icon, i) => (
                                <IconButton
                                    key={i}
                                    size="small"
                                    sx={{
                                        color: colors.textSecondary,
                                        '&:hover': { color: '#6366f1', bgcolor: alpha('#6366f1', 0.1) }
                                    }}
                                >
                                    {icon}
                                </IconButton>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default LandingPage;
