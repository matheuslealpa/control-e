package com.control.e.app.repository.specification;

import com.control.e.app.domain.Evento;
import com.control.e.app.domain.Colando;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Root;
import javax.persistence.criteria.Subquery;

public class ColandoSpecification {
    public static Specification<Colando> eventoEqualsId(Long idEvento) {
        return (root, query, cb) -> {
            Subquery<Evento> eventoSubquery = query.subquery(Evento.class);
            Root<Evento> eventoRoot = eventoSubquery.from(Evento.class);
            Join<Evento, Colando> eventoColandoJoin = eventoRoot.join("colandos", JoinType.INNER);
            eventoSubquery.select(eventoRoot)
                    .where(cb.and(cb.equal(eventoRoot.get("id"), idEvento),
                                    cb.equal(root.get("id"), eventoColandoJoin.get("id"))
                            )
                    );
            return cb.exists(eventoSubquery);
        };
    }

}
