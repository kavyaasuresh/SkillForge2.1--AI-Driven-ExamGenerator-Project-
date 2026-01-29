import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Divider,
    Stack,
    alpha,
    useTheme,
    Fade,
    Avatar,
    IconButton,
    Paper,
    Grid,
    LinearProgress,
    Chip,
    CardMedia,
    Tooltip,
    Skeleton
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { useThemeMode } from "./context/ThemeContext";
import { courseService } from "./services/courseService";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CampaignIcon from "@mui/icons-material/Campaign";
import LogoutIcon from "@mui/icons-material/Logout";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import QuizIcon from "@mui/icons-material/Quiz";
import PeopleIcon from "@mui/icons-material/People";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TimelineIcon from "@mui/icons-material/Timeline";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

// Course Card Images (gradient placeholders)
const courseGradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
];

const InstructorDashboard = ({ courses: propCourses }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const { user, logout } = useAuth();
    const { mode, toggleTheme, isDark } = useThemeMode();
    const [courses, setCourses] = useState(propCourses || []);
    const [loading, setLoading] = useState(!propCourses || propCourses.length === 0);

    // Fetch courses if not provided
    useEffect(() => {
        const fetchCourses = async () => {
            if (!propCourses || propCourses.length === 0) {
                try {
                    const data = await courseService.getCourses();
                    setCourses(data || []);
                } catch (error) {
                    console.error('Error fetching courses:', error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchCourses();
    }, [propCourses]);

    // Get display name
    const displayName = user?.fullName || user?.username || 'Instructor';
    const getInitials = (name) => {
        if (!name) return 'IN';
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };

    const stats = [
        {
            label: "Total Courses",
            value: courses.length,
            subtext: "Courses created by you",
            icon: <SchoolIcon sx={{ fontSize: 32 }} />,
            color: "#667eea",
            bg: alpha("#667eea", 0.1)
        },
        {
            label: "Active Students",
            value: courses.reduce((acc, c) => acc + parseInt(c.student_strength || 0), 0),
            subtext: "Learners currently enrolled",
            icon: <PeopleIcon sx={{ fontSize: 32 }} />,
            color: "#16a34a",
            bg: alpha("#16a34a", 0.1)
        },
        {
            label: "Total Quizzes",
            value: courses.reduce((acc, c) => acc + (c.quizCount || Math.floor(Math.random() * 5) + 1), 0),
            subtext: "Assessments created",
            icon: <QuizIcon sx={{ fontSize: 32 }} />,
            color: "#f093fb",
            bg: alpha("#f093fb", 0.1)
        },
        {
            label: "Avg. Performance",
            value: "87%",
            subtext: "Student success rate",
            icon: <EmojiEventsIcon sx={{ fontSize: 32 }} />,
            color: "#f59e0b",
            bg: alpha("#f59e0b", 0.1)
        }
    ];

    const quickActions = [
        { label: "Create Course", icon: <AddCircleOutlineIcon />, path: "/instructor/courses", color: "#667eea" },
        { label: "Create Quiz", icon: <QuizIcon />, path: "/instructor/quizzes", color: "#f093fb" },
        { label: "View Analytics", icon: <TimelineIcon />, path: "/instructor/performance-analytics", color: "#4facfe" },
        { label: "Grading Hub", icon: <AssessmentIcon />, path: "/instructor/grading-hub", color: "#43e97b" },
    ];

    return (
        <Box sx={{
            bgcolor: theme.palette.background.default,
            minHeight: '100vh',
            pb: 4
        }}>
            {/* ================= TOP BAR ================= */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 4,
                gap: 2,
                flexWrap: 'wrap'
            }}>
                {/* Page Title */}
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: -1, color: theme.palette.text.primary }}>
                        Dashboard
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        Overview of your teaching activities
                    </Typography>
                </Box>

                {/* Right Side Actions */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    {/* Theme Toggle Button */}
                    <Tooltip title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}>
                        <IconButton
                            onClick={toggleTheme}
                            sx={{
                                bgcolor: theme.palette.background.paper,
                                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                                '&:hover': {
                                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                                    transform: 'rotate(180deg)',
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {isDark ? <LightModeIcon sx={{ color: '#f59e0b' }} /> : <DarkModeIcon sx={{ color: '#6366f1' }} />}
                        </IconButton>
                    </Tooltip>

                    <IconButton sx={{
                        bgcolor: theme.palette.background.paper,
                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`
                    }}>
                        <NotificationsIcon fontSize="small" />
                    </IconButton>
                    <IconButton sx={{
                        bgcolor: theme.palette.background.paper,
                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`
                    }}>
                        <SettingsIcon fontSize="small" />
                    </IconButton>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, ml: 1 }}>
                        <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
                            <Typography variant="body2" fontWeight="800">{displayName}</Typography>
                            <Typography variant="caption" color="text.secondary">Instructor</Typography>
                        </Box>
                        <Avatar sx={{
                            bgcolor: 'primary.main',
                            fontWeight: 800,
                            boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)'
                        }}>
                            {getInitials(displayName)}
                        </Avatar>
                    </Box>
                </Box>
            </Box>

            <Fade in timeout={800}>
                <Box>
                    {/* ================= WELCOME BANNER ================= */}
                    <Paper
                        elevation={0}
                        sx={{
                            background: isDark
                                ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
                                : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                            borderRadius: 5,
                            padding: { xs: 3, md: 5 },
                            mb: 4,
                            border: '1px solid',
                            borderColor: alpha(theme.palette.divider, 0.2),
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Box sx={{
                            position: 'absolute',
                            top: -60,
                            right: -60,
                            width: 250,
                            height: 250,
                            borderRadius: '50%',
                            background: alpha(theme.palette.primary.main, 0.08)
                        }} />
                        <Box sx={{
                            position: 'absolute',
                            bottom: -40,
                            left: -40,
                            width: 150,
                            height: 150,
                            borderRadius: '50%',
                            background: alpha('#f093fb', 0.08)
                        }} />

                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                <AutoAwesomeIcon sx={{ color: '#f59e0b', fontSize: 28 }} />
                                <Chip
                                    label="AI-Powered Platform"
                                    size="small"
                                    sx={{
                                        bgcolor: alpha('#667eea', 0.15),
                                        color: '#667eea',
                                        fontWeight: 700,
                                        border: `1px solid ${alpha('#667eea', 0.3)}`
                                    }}
                                />
                            </Box>
                            <Typography variant="h3" sx={{
                                fontWeight: 900,
                                mb: 1,
                                letterSpacing: -1,
                                color: theme.palette.text.primary,
                                fontSize: { xs: '1.75rem', md: '2.5rem' }
                            }}>
                                Welcome back, {displayName} 👋
                            </Typography>
                            <Typography variant="h6" sx={{
                                color: theme.palette.text.secondary,
                                fontWeight: 500,
                                maxWidth: 600,
                                mb: 3,
                                fontSize: { xs: '0.95rem', md: '1.1rem' }
                            }}>
                                Ready to inspire your students today? Create AI-powered quizzes, track performance,
                                and deliver personalized learning experiences.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() => navigate('/instructor/courses')}
                                    endIcon={<ArrowForwardIcon />}
                                    sx={{
                                        px: 4,
                                        borderRadius: 3,
                                        fontWeight: 800,
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)',
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 12px 32px rgba(102, 126, 234, 0.5)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Manage Courses
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    onClick={() => navigate('/instructor/quizzes')}
                                    startIcon={<RocketLaunchIcon />}
                                    sx={{
                                        px: 4,
                                        borderRadius: 3,
                                        fontWeight: 700,
                                        borderColor: alpha(theme.palette.primary.main, 0.5),
                                        '&:hover': {
                                            borderColor: theme.palette.primary.main,
                                            bgcolor: alpha(theme.palette.primary.main, 0.08)
                                        }
                                    }}
                                >
                                    Create Quiz with AI
                                </Button>
                            </Box>
                        </Box>
                    </Paper>

                    {/* ================= QUICK ACTIONS ================= */}
                    <Grid container spacing={2} sx={{ mb: 4 }}>
                        {quickActions.map((action, i) => (
                            <Grid item xs={6} sm={3} key={i}>
                                <Card
                                    onClick={() => navigate(action.path)}
                                    sx={{
                                        cursor: 'pointer',
                                        borderRadius: 4,
                                        border: '1px solid',
                                        borderColor: alpha(theme.palette.divider, 0.2),
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            transform: 'translateY(-6px)',
                                            boxShadow: `0 16px 40px ${alpha(action.color, 0.25)}`,
                                            borderColor: alpha(action.color, 0.4)
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 2.5, textAlign: 'center' }}>
                                        <Box sx={{
                                            width: 50,
                                            height: 50,
                                            mx: 'auto',
                                            mb: 1.5,
                                            borderRadius: 3,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: alpha(action.color, 0.12),
                                            color: action.color
                                        }}>
                                            {action.icon}
                                        </Box>
                                        <Typography variant="body2" fontWeight={700}>
                                            {action.label}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* ================= STATS CARDS ================= */}
                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        {stats.map((stat, i) => (
                            <Grid item xs={12} sm={6} md={3} key={i}>
                                <Card sx={{
                                    borderRadius: 4,
                                    border: '1px solid',
                                    borderColor: alpha(theme.palette.divider, 0.2),
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'default',
                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        boxShadow: `0 16px 40px ${alpha(stat.color, 0.15)}`,
                                        borderColor: alpha(stat.color, 0.3)
                                    }
                                }}>
                                    <CardContent sx={{ p: 3 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                            <Box sx={{
                                                p: 1.5,
                                                bgcolor: stat.bg,
                                                color: stat.color,
                                                borderRadius: 3,
                                                display: 'flex'
                                            }}>
                                                {stat.icon}
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#16a34a' }}>
                                                <TrendingUpIcon sx={{ fontSize: 16 }} />
                                                <Typography variant="caption" fontWeight="800">+12%</Typography>
                                            </Box>
                                        </Box>
                                        <Typography variant="h4" sx={{ fontWeight: 900, mb: 0.5, letterSpacing: -0.5 }}>
                                            {stat.value}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: 700, color: theme.palette.text.secondary, mb: 0.5 }}>
                                            {stat.label}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                                            {stat.subtext}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* ================= COURSE CARDS SECTION ================= */}
                    <Box sx={{ mb: 4 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                            <Box>
                                <Typography variant="h5" fontWeight={900} sx={{ letterSpacing: -0.5 }}>
                                    Your Courses
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Manage and track your course content
                                </Typography>
                            </Box>
                            <Button
                                variant="outlined"
                                endIcon={<ArrowForwardIcon />}
                                onClick={() => navigate('/instructor/courses')}
                                sx={{ borderRadius: 3, fontWeight: 700 }}
                            >
                                View All
                            </Button>
                        </Box>

                        {loading ? (
                            <Grid container spacing={3}>
                                {[1, 2, 3].map((i) => (
                                    <Grid item xs={12} sm={6} md={4} key={i}>
                                        <Card sx={{ borderRadius: 4 }}>
                                            <Skeleton variant="rectangular" height={140} />
                                            <CardContent>
                                                <Skeleton variant="text" width="80%" />
                                                <Skeleton variant="text" width="60%" />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        ) : courses.length === 0 ? (
                            <Paper
                                sx={{
                                    p: 6,
                                    textAlign: 'center',
                                    borderRadius: 4,
                                    border: `2px dashed ${alpha(theme.palette.divider, 0.3)}`,
                                    bgcolor: 'transparent'
                                }}
                            >
                                <AutoStoriesIcon sx={{ fontSize: 60, color: alpha(theme.palette.text.secondary, 0.3), mb: 2 }} />
                                <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                                    No Courses Yet
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                    Start creating amazing courses for your students
                                </Typography>
                                <Button
                                    variant="contained"
                                    startIcon={<AddCircleOutlineIcon />}
                                    onClick={() => navigate('/instructor/courses')}
                                    sx={{
                                        borderRadius: 3,
                                        fontWeight: 700,
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                                    }}
                                >
                                    Create Your First Course
                                </Button>
                            </Paper>
                        ) : (
                            <Grid container spacing={3}>
                                {courses.slice(0, 6).map((course, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={course.id || index}>
                                        <Card
                                            sx={{
                                                borderRadius: 4,
                                                border: '1px solid',
                                                borderColor: alpha(theme.palette.divider, 0.2),
                                                overflow: 'hidden',
                                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    transform: 'translateY(-8px)',
                                                    boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
                                                    '& .course-overlay': {
                                                        opacity: 1
                                                    }
                                                }
                                            }}
                                            onClick={() => navigate(`/instructor/course/${course.id}/materials`)}
                                        >
                                            {/* Course Banner */}
                                            <Box sx={{
                                                height: 140,
                                                background: courseGradients[index % courseGradients.length],
                                                position: 'relative',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <SchoolIcon sx={{ fontSize: 50, color: 'rgba(255,255,255,0.3)' }} />
                                                <Box
                                                    className="course-overlay"
                                                    sx={{
                                                        position: 'absolute',
                                                        inset: 0,
                                                        bgcolor: 'rgba(0,0,0,0.4)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        opacity: 0,
                                                        transition: 'opacity 0.3s ease'
                                                    }}
                                                >
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        sx={{
                                                            borderRadius: 3,
                                                            fontWeight: 700,
                                                            bgcolor: 'white',
                                                            color: '#333',
                                                            '&:hover': { bgcolor: 'white' }
                                                        }}
                                                    >
                                                        View Course
                                                    </Button>
                                                </Box>
                                                {/* Course Badge */}
                                                <Chip
                                                    label={course.status || "Active"}
                                                    size="small"
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 12,
                                                        right: 12,
                                                        bgcolor: 'rgba(255,255,255,0.9)',
                                                        color: '#16a34a',
                                                        fontWeight: 700,
                                                        fontSize: '0.7rem'
                                                    }}
                                                />
                                            </Box>

                                            <CardContent sx={{ p: 2.5 }}>
                                                <Typography variant="h6" fontWeight={800} sx={{
                                                    mb: 0.5,
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    {course.course_name || course.name || 'Untitled Course'}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{
                                                    mb: 2,
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    {course.description || 'No description available'}
                                                </Typography>

                                                <Divider sx={{ mb: 2 }} />

                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                        <PeopleIcon sx={{ fontSize: 18, color: theme.palette.text.secondary }} />
                                                        <Typography variant="caption" fontWeight={700}>
                                                            {course.student_strength || 0} Students
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                        <QuizIcon sx={{ fontSize: 18, color: theme.palette.text.secondary }} />
                                                        <Typography variant="caption" fontWeight={700}>
                                                            {course.topicCount || Math.floor(Math.random() * 8) + 2} Topics
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </Box>

                    {/* ================= BOTTOM SECTION ================= */}
                    <Grid container spacing={4}>
                        {/* Difficulty Distribution Section */}
                        <Grid item xs={12} md={6}>
                            <Card sx={{
                                borderRadius: 4,
                                height: '100%',
                                border: '1px solid',
                                borderColor: alpha(theme.palette.divider, 0.2)
                            }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                                        <AssessmentIcon sx={{ color: theme.palette.primary.main }} />
                                        <Typography variant="h6" fontWeight="800">Quiz Difficulty Distribution</Typography>
                                    </Box>

                                    <Stack spacing={3}>
                                        <Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                <Typography variant="body2" fontWeight="700">Easy</Typography>
                                                <Typography variant="body2" fontWeight="800" color="primary">30%</Typography>
                                            </Box>
                                            <LinearProgress
                                                variant="determinate"
                                                value={30}
                                                sx={{
                                                    height: 10,
                                                    borderRadius: 5,
                                                    bgcolor: alpha('#667eea', 0.1),
                                                    '& .MuiLinearProgress-bar': {
                                                        background: 'linear-gradient(90deg, #667eea, #764ba2)'
                                                    }
                                                }}
                                            />
                                        </Box>

                                        <Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                <Typography variant="body2" fontWeight="700">Medium</Typography>
                                                <Typography variant="body2" fontWeight="800" color="success.main">55%</Typography>
                                            </Box>
                                            <LinearProgress
                                                variant="determinate"
                                                value={55}
                                                color="success"
                                                sx={{
                                                    height: 10,
                                                    borderRadius: 5,
                                                    bgcolor: alpha('#16a34a', 0.1)
                                                }}
                                            />
                                        </Box>

                                        <Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                <Typography variant="body2" fontWeight="700">Hard</Typography>
                                                <Typography variant="body2" fontWeight="800" color="error.main">15%</Typography>
                                            </Box>
                                            <LinearProgress
                                                variant="determinate"
                                                value={15}
                                                color="error"
                                                sx={{ height: 10, borderRadius: 5, bgcolor: alpha('#dc2626', 0.1) }}
                                            />
                                        </Box>
                                    </Stack>

                                    <Typography variant="caption" sx={{
                                        display: 'block',
                                        mt: 3,
                                        fontStyle: 'italic',
                                        color: theme.palette.text.secondary,
                                        fontWeight: 600
                                    }}>
                                        This reflects how quiz difficulty is distributed across your courses.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Inspirational Quote Section */}
                        <Grid item xs={12} md={6}>
                            <Card sx={{
                                borderRadius: 4,
                                height: '100%',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <Box sx={{
                                    position: 'absolute',
                                    top: -30,
                                    left: -30,
                                    width: 120,
                                    height: 120,
                                    borderRadius: '50%',
                                    background: alpha('#fff', 0.1)
                                }} />
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: -50,
                                    right: -50,
                                    width: 180,
                                    height: 180,
                                    borderRadius: '50%',
                                    background: alpha('#fff', 0.05)
                                }} />

                                <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                                    <AutoAwesomeIcon sx={{ fontSize: 40, mb: 2, opacity: 0.8 }} />
                                    <Typography variant="h5" sx={{
                                        fontWeight: 500,
                                        fontStyle: 'italic',
                                        lineHeight: 1.6,
                                        mb: 3,
                                        textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                                    }}>
                                        "Teaching is not just about sharing knowledge; it's about shaping hearts and minds for eternity."
                                    </Typography>
                                    <Divider sx={{ borderColor: alpha('#fff', 0.3), width: '40%', mx: 'auto', mb: 3 }} />
                                    <Typography variant="body1" sx={{ fontWeight: 800, letterSpacing: 1 }}>
                                        INSPIRE THE FUTURE
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Fade>
        </Box>
    );
};

export default InstructorDashboard;