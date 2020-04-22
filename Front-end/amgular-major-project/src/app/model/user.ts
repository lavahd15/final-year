export class User {
    private _userid: number;
    private _name: string;
    private _username: string;
    private _password: string;
    private _usertype: string;
    private _gender: string;
    private _email: string;
    private _date: Date;
    private _contact: number;

    /**
     * Getter $userid
     * @return {number}
     */
	public get userid(): number {
		return this._userid;
	}

    /**
     * Setter $userid
     * @param {number} value
     */
	public set userid(value: number) {
		this._userid = value;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Getter $username
     * @return {string}
     */
	public get username(): string {
		return this._username;
	}

    /**
     * Setter $username
     * @param {string} value
     */
	public set username(value: string) {
		this._username = value;
	}

    /**
     * Getter $password
     * @return {string}
     */
	public get password(): string {
		return this._password;
	}

    /**
     * Setter $password
     * @param {string} value
     */
	public set password(value: string) {
		this._password = value;
	}

    /**
     * Getter $usertype
     * @return {string}
     */
	public get usertype(): string {
		return this._usertype;
	}

    /**
     * Setter $usertype
     * @param {string} value
     */
	public set usertype(value: string) {
		this._usertype = value;
	}

    /**
     * Getter $gender
     * @return {string}
     */
	public get gender(): string {
		return this._gender;
	}

    /**
     * Setter $gender
     * @param {string} value
     */
	public set gender(value: string) {
		this._gender = value;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Getter $date
     * @return {Date}
     */
	public get date(): Date {
		return this._date;
	}

    /**
     * Setter $date
     * @param {Date} value
     */
	public set date(value: Date) {
		this._date = value;
	}

    /**
     * Getter $contact
     * @return {number}
     */
	public get contact(): number {
		return this._contact;
	}

    /**
     * Setter $contact
     * @param {number} value
     */
	public set contact(value: number) {
		this._contact = value;
	}
    

}