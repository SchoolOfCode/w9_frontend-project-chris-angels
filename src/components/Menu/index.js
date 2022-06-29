import { Link } from 'react-router-dom';

// Import the circular menu
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from 'react-circular-menu';

function Menu() {
  return (
    <CircleMenu
      style={{ borderColor: '#181e50' }}
      className="circleMenu"
      startAngle={-10}
      rotationAngle={150}
      itemSize={3.2}
      radius={7.2}
      rotationAngleInclusive={false}
    >
      <CircleMenuItem
        style={{ borderColor: '#181e50' }}
        className="linkparent"
        tooltip="Settings"
        tooltipPlacement={TooltipPlacement.Right}
      >
        <Link className="linkgrow" to="/settings">
          Settings
        </Link>
      </CircleMenuItem>
      <CircleMenuItem
        style={{ borderColor: '#181e50' }}
        className="linkparent"
        tooltipPlacement={TooltipPlacement.Right}
        sx={{ width: 'fit-content' }}
        tooltip="Resources"
      >
        <Link className="linkgrow" to="/resources">
          Resources
        </Link>
      </CircleMenuItem>
      <CircleMenuItem
        style={{ borderColor: '#181e50' }}
        className="linkparent"
        tooltipPlacement={TooltipPlacement.Bottom}
        sx={{ width: 'fit-content' }}
        tooltip="Diary"
      >
        <Link className="linkgrow" to="/diary">
          Diary
        </Link>
      </CircleMenuItem>
      <CircleMenuItem
        style={{ borderColor: '#181e50' }}
        className="linkparent"
        tooltipPlacement={TooltipPlacement.Bottom}
        sx={{ width: 'fit-content' }}
        tooltip="Home"
      >
        <Link className="linkgrow" to="/">
          Home
        </Link>
      </CircleMenuItem>
    </CircleMenu>
  );
}

export default Menu;
