interface UserOpportunities {
  text: string;
  price: string;
}

export interface UserActivities {
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
  userOpportunities: UserOpportunities[];
  userActivities: UserActivities[];
}

export interface TableHeader {
  text: string;
  sortable: boolean;
  value: string;
  align: string;
}

interface UserActivitiesMenuOptions {
  text: string;
}

export interface UserActivitiesMenu {
  icon: string;
  options: UserActivitiesMenuOptions[];
}