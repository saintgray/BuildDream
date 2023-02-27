package com.jh.code.jpo;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.jh.code.jpo.key.CategoryJpoKey;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity(name = "category")
@Table(name = "category")
@IdClass(CategoryJpoKey.class)
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class CategoryJpo {

    @Id
    @Column(name = "cat_idx")
    private BigDecimal catIdx;
    @Column(name = "cat_nm")
    private String catNm;
    @Column(name = "cat_regdate")
    private Timestamp catRegdate;
    @Column(name = "cat_editdate")
    private Timestamp catEditdate;
    @Column(name = "cat_deldate")
    private String catDeldate;
    @Column(name = "parent_idx")
    private BigDecimal parentIdx;

}
