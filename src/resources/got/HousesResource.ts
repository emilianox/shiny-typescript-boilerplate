import { AbstractInstanceType, ReadShape, Resource, SchemaList } from 'rest-hooks';
// tslint:disable-next-line: import-name
import request from 'superagent';

export default class HousesResource extends Resource {
  public static urlRoot = 'https://anapioficeandfire.com/api/houses';

  public static listShape<T extends typeof Resource>(this: T):
    ReadShape<SchemaList<AbstractInstanceType<T>>> {
    const fetch = async (
      params: Readonly<Record<string, string | number>>,
      body?: Readonly<object | string>,
    ) => {
      const url = this.listUrl(params);
      let req = request.get(url).on('error', () => { });
      if (this.fetchPlugin) req = req.use(this.fetchPlugin);
      if (body) req = req.send(body);
      const res = (await req);
      let jsonResponse = res.body;
      // include both the body and the link header
      jsonResponse = {
        link: res.header.link,
        results: jsonResponse,
      };
      return jsonResponse;
    };

    return {
      ...super.listShape(),
      fetch,
      schema: { results: [this.getEntitySchema()] },
    };
  }

  public readonly url: string = '';
  public readonly name: string = '';
  public readonly region: string = '';
  public readonly coatOfArms: string = '';
  public readonly words: string = '';
  public readonly titles: string[] = [];
  public readonly seats: string[] = [];
  public readonly currentLord: string = '';
  public readonly heir: string = '';
  public readonly overlord: string = '';
  public readonly founded: string = '';
  public readonly founder: string = '';
  public readonly diedOut: string = '';
  public readonly ancestralWeapons: string[] = [];
  public readonly cadetBranches: string[] = [];
  public readonly swornMembers: string[] = [];

  public pk() {
    return this.url;
  }

}
