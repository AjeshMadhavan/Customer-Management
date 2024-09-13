interface UserOpportunity {
  text: string;
  price: string;
}

export interface UserActivity {
  activity: string;
  date: string;
  assignedUser: string;
}

export interface UserData {
  name: string;
  position: string;
  company: string;
  status: string;
  assignedTo: string;
  phone: string;
  email: string;
  address: string;
  userOpportunities: UserOpportunity[];
  userActivities: UserActivity[];
}

export interface TableHeader {
  text: string;
  sortable: boolean;
  value: string;
  align: string;
}

interface UserActivitiesMenuOption {
  text: string;
}

export interface UserActivitiesMenu {
  icon: string;
  options: UserActivitiesMenuOption[];
}