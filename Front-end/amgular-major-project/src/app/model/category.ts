export class category {
    
    private _categoryid: number;
    private _categoryname: string;

    /**
     * Getter categoryid
     * @return {number}
     */
	public get categoryid(): number {
		return this._categoryid;
	}

    /**
     * Setter categoryid
     * @param {number} value
     */
	public set categoryid(value: number) {
		this._categoryid = value;
	}

    /**
     * Getter categoryname
     * @return {string}
     */
	public get categoryname(): string {
		return this._categoryname;
	}

    /**
     * Setter categoryname
     * @param {string} value
     */
	public set categoryname(value: string) {
		this._categoryname = value;
	}

}