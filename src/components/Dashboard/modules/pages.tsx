import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import HelpIcon from "@mui/icons-material/Help";

export const pages = [
  {
    id: 1,
    name: "Home",
    base: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Editar Página",
    base: "/",
    icon: <BusinessIcon />,
  },
  {
    id: 3,
    name: "Conexões",
    base: "/",
    icon: <PeopleIcon />,
  },
  {
    id: 4,
    name: "Materiais",
    base: "/",
    icon: <FormatPaintIcon />,
  },
  {
    id: 5,
    name: "Desafios",
    base: "/",
    icon: <RocketLaunchIcon />,
  },
  {
    id: 6,
    name: "Eventos",
    base: "/",
    icon: <CalendarMonthIcon />,
  },
  {
    id: 7,
    name: "Empregos",
    base: "/",
    icon: <PersonSearchIcon />,
  },
  {
    id: 8,
    name: "Centro de ajuda",
    base: "/",
    icon: <HelpIcon />,
  },
];
