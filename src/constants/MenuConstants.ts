import AdminLogo from '../images/home.png';

export default class {
  public static mappings: any = {
    DesignTechnician: {
      menuName: 'DT',
      logo: AdminLogo,
      screenURL: '/design-technician',
    },
    Admin: {
      menuName: 'Admin',
      logo: AdminLogo,
      screenURL: '/admin',
    },
    Inquiry: {
      menuName: 'Inquiry',
      logo: AdminLogo,
      screenURL: '/inquiry',
    },
  };
}
